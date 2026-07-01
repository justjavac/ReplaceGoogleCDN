const fs = require("fs");
const path = require("path");

const ruleDirectories = [
  path.join("extension", "rules"),
  path.join("extension", "options_ui", "rule_example")
];

const errors = [];

function walkJsonFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkJsonFiles(filePath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(filePath);
    }
  }

  return files;
}

function findOverlap(left = [], right = []) {
  const rightSet = new Set(right);
  return left.filter((value) => rightSet.has(value));
}

function checkDomainCondition(filePath, rule, includeKey, excludeKey) {
  const condition = rule.condition || {};
  const overlap = findOverlap(condition[includeKey], condition[excludeKey]);

  if (overlap.length > 0) {
    errors.push(
      `${filePath}: rule ${rule.id} contains the same domain in ${includeKey} and ${excludeKey}: ${overlap.join(", ")}`
    );
  }
}

function checkUrlFilters(filePath, rule) {
  const condition = rule.condition || {};

  if (condition.urlFilter && condition.regexFilter) {
    errors.push(
      `${filePath}: rule ${rule.id} specifies both urlFilter and regexFilter`
    );
  }
}

function checkDuplicateRuleIds(filePath, rules) {
  const seenIds = new Set();

  for (const rule of rules) {
    if (seenIds.has(rule.id)) {
      errors.push(`${filePath}: contains duplicate rule id ${rule.id}`);
      continue;
    }

    seenIds.add(rule.id);
  }
}

for (const directory of ruleDirectories) {
  for (const filePath of walkJsonFiles(directory)) {
    const rules = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const ruleList = Array.isArray(rules) ? rules : [rules];

    checkDuplicateRuleIds(filePath, ruleList);

    for (const rule of ruleList) {
      checkDomainCondition(
        filePath,
        rule,
        "requestDomains",
        "excludedRequestDomains"
      );
      checkDomainCondition(
        filePath,
        rule,
        "initiatorDomains",
        "excludedInitiatorDomains"
      );
      checkUrlFilters(filePath, rule);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Rule checks passed.");
