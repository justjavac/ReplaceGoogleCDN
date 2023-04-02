(async () => {
  let URLObj = new URL(location.href);
  console.log(URLObj);
  switch (URLObj.pathname) {
    case "/options_ui/index.html":
      let index = await import("/options_ui/js/IndexBundle/app.js");
      index.default();
      break;
    case "/options_ui/advance.html":
      let advance = await import("/options_ui/js/AdvanceBundle/app.js");
      advance.default();
      break;
    default:
      break;
  }
})();
