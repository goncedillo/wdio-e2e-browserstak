const mobileDevices = require("./devices/mobile");
const desktopDevices = require("./devices/desktop");

module.exports = config => [
    ...(Object.keys(mobileDevices).map(key => mobileDevices[key])),
    ...(Object.keys(desktopDevices).map(key => desktopDevices[key])),
].map(item => ({
    ...item,
    project: config.project,
    build: config.buildName
}));