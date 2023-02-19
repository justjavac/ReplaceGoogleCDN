import { showRuleList } from "./show-rule.js";

//domain 与 rules/mirrors 目录下文件名称一一对应
let default_domains = {
  "ajax.googleapis.com": {
    id: 1,
    domain: "ajax.googleapis.com",
  },
  "fonts.googleapis.com": {
    id: 2,
    domain: "fonts.googleapis.com",
  },
  "themes.googleusercontent.com": {
    id: 3,
    domain: "themes.googleusercontent.com",
  },
  "fonts.gstatic.com": {
    id: 4,
    domain: "fonts.gstatic.com",
  },
  "gravatar.com": {
    id: 5,
    domain: "gravatar.com",
  },
  "maxcdn.bootstrapcdn.com/bootstrap": {
    id: 6,
    domain: "maxcdn.bootstrapcdn.com",
  },
  "code.jquery.com/jquery-(version)(suffix)": {
    id: 7,
    domain: "code.jquery.com",
  },
  "code.jquery.com/ui/(prefix)(version)(suffix)": {
    id: 8,
    domain: "code.jquery.com-ui",
  },
  "cdnjs.cloudflare.com": {
    id: 9,
    domain: "cdnjs.cloudflare.com",
  },
  "cdn.jsdelivr.net": {
    id: 10,
    domain: "cdn.jsdelivr.net",
  },
  /*
  "translate.googleapis.com": {
    id: 11,
    domain: "translate.googleapis.com",
  },
   */
  "www.gstatic.com": {
    id: 12,
    domain: "www.gstatic.com",
  },
  "developer.android.com": {
    id: 13,
    domain: "developer.android.com",
  },
  "developers.google.com": {
    id: 17,
    domain: "developers.google.com",
  },
  "source.android.com": {
    id: 18,
    domain: "source.android.com",
  },
  "lh3.googleusercontent.com": {
    id: 14,
    domain: "lh3.googleusercontent.com",
  },
  "cdn.sstatic.net": {
    id: 15,
    domain: "cdn.sstatic.net",
  },
  "imgur.com": {
    id: 16,
    domain: "imgur.com",
  },
  /*
  "supper-priority-override-rule": {
    id: 9999,
    domain: "supper-priority-override",
  },
   */
};

let reset_default_domain_app = () => {
  document
    .querySelector(".reset_default_domain")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          addRules: [],
          removeRuleIds: [
            9999, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ],
        },
        (parameter) => {
          console.log(parameter);
          location.reload();
        }
      );
    });
};
let default_domains_app = () => {
  reset_default_domain_app();

  let list = "";
  for (let i in default_domains) {
    //console.log(i, default_domains[i]);
    list += `<li data-id="${default_domains[i].id}" data-domain="${default_domains[i].domain}">编号：${default_domains[i].id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${i}</li>`;
  }
  let default_domains_list = document.querySelector(
    ".default-redirect-domains"
  );
  default_domains_list.innerHTML = list;

  let default_domains_option = document.querySelector(
    ".default-redirect-domians-options"
  );

  default_domains_list.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.nodeName === "LI") {
      let id = event.target.getAttribute("data-id");
      let domain = event.target.getAttribute("data-domain");
      let url = chrome.runtime.getURL("/rules/mirrors/" + domain + ".json");
      default_domains_option.innerHTML =
        "<option selected='selected' value='0'>请选择</option>";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          for (let i in response) {
            console.log(response[i]);
            let option = document.createElement("option");
            option.text =
              "规则候选项" +
              response[i]["id"] +
              ": " +
              JSON.stringify(response[i]["action"]["redirect"]);
            option.value = response[i]["id"];
            option.setAttribute("data-rule-info", JSON.stringify(response[i]));
            default_domains_option.add(option);
          }
          default_domains_option.setAttribute("data-id", id);
        });
    }
  });
  default_domains_option.addEventListener("change", (event) => {
    //console.log(event.target);
    //console.log(event.target.selectedIndex);
    let value = event.target.options[event.target.selectedIndex].value;
    //console.log(value);
    if (event.target.selectedIndex === 0 || parseInt(value) === 0) {
      return;
    }

    //console.log(event.target.options[event.target.selectedIndex]);

    let rule_info =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-rule-info"
      );
    let rule = JSON.parse(rule_info);

    let rule_id = parseInt(event.target.getAttribute("data-id"));

    rule["id"] = rule_id;
    rule["priority"] = 2;
    //特殊定制规则ID=9999
    if (rule_id === 9999) {
      rule["priority"] = 9999;
    }
    console.log(rule, rule_id);
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        addRules: [rule],
        removeRuleIds: [rule_id],
      },
      (parameter) => {
        console.log(parameter);
        showRuleList("single_rule");
      }
    );
  });
};

export { default_domains_app };
