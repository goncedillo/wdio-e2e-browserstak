const mobileDevices = require("./devices/mobile");
const desktopDevices = require("./devices/desktop");

module.exports = config => [
    ...(Object.keys(mobileDevices).map(key => ({ ...mobileDevices[key], devName: key }))),
    ...(Object.keys(desktopDevices).map(key => ({ ...desktopDevices[key], devName: key }))),
].map(item => ({
    ...item,
    project: config.project,
    build: config.buildName
}));