import { deleteDynamicRules, backupDynamicRules } from "./common.js";
let main = () => {
  document
    .querySelector(".delete-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("all_dynamic_rule");
    });

  document
    .querySelector(".backup-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      backupDynamicRules();
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
};

export { main };
