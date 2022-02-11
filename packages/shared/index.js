const prepareAudit = (launchOptions) => {
  const remoteDebugging = launchOptions.args.find((config) =>
    config.includes("--remote-debugging-port=")
  );

  if (remoteDebugging) {
    global.port = remoteDebugging.split("=")[1];
    console.log('FOUND PORT =========== ', global.port);
  } else {
    console.error(
      "[cypress-audit]: Woops, something went wrong when trying to get the browser port."
    );
  }
};

module.exports = { prepareAudit };
