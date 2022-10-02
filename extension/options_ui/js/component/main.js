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
};

export { main };
