global.ErrorUtils.setGlobalHandler((error) => {
  console.error(error.name, error.message);
  // TODO:hide all loading
  // TODO:report error
  // WBAPP.errorReport(error);
}, true);
