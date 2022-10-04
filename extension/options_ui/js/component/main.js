import { deleteDynamicRules, backupDynamicRules, utils } from "./common.js";
let main = () => {
  document
    .querySelector(".backup-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      backupDynamicRules();
    });

  document
    .querySelector(".delete-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("all_dynamic_rule");
    });

  document
    .querySelector(".delete-sync-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("sync_remote_rule");
    });

  document
    .querySelector(".delete-self-define-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_rule");
    });

  document
    .querySelector(".delete-self-define-special-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_special_rule");
    });

  document
    .querySelector(".example-show-controller")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      let button = event.target;
      let show_state = button.getAttribute("data-state");
      let example_group = document.querySelectorAll(".example-item");
      if (show_state === "hidden-example") {
        button.innerText = "隐藏演示例子";
        button.setAttribute("data-state", "show-example");
        example_group.forEach((value) => {
          utils.removeClass(value, "example-hidden");
        });
      } else {
        button.innerText = "显示演示例子";
        button.setAttribute("data-state", "hidden-example");
        example_group.forEach((value) => {
          utils.addClass(value, "example-hidden");
        });
      }
    });
};

export { main };
