import defaultDomain from "../Components/DefaultDomain.js";
import editor from "../../CommonBundle/Components/editor.js";
import showRuleList from "../../CommonBundle/Components/showRuleList.js";

 let indexController = () => {
  defaultDomain();
  showRuleList("single_rule");
  editor.init();
};

export {indexController}
