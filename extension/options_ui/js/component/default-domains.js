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
  /*
    "code.jquery.com/ui/(prefix)(version)(suffix)": {
        "id": 8,
        "domain": "code.jquery.com-ui"
    }

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
          removeRuleIds: [1, 2, 3, 4, 5, 6, 7, 8],
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
    console.log(i, default_domains[i]);
    list += `<li data-id="${default_domains[i].id}" data-domain="${default_domains[i].domain}">${i}</li>`;
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
            option.text = JSON.stringify(response[i]["action"]["redirect"]);
            option.value = response[i]["id"];
            option.setAttribute("data-rule-info", JSON.stringify(response[i]));
            default_domains_option.add(option);
          }
          default_domains_option.setAttribute("data-id", id);
        });
    }
  });
  default_domains_option.addEventListener("change", (event) => {
    console.log(event.target);
    console.log(event.target.selectedIndex);
    let value = event.target.options[event.target.selectedIndex].value;
    console.log(value);
    if (value == 0) {
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
    console.log(rule, rule_id);
    chrome.declarativeNetRequest.updateDynamicRules(
      {
        addRules: [rule],
        removeRuleIds: [rule_id],
      },
      (parameter) => {
        console.log(parameter);
      }
    );
  });
};

export { default_domains_app };
