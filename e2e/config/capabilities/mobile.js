const devices = require("./devices/mobile");

module.exports = config => [
    ...(Object.keys(devices).map(key => devices[key])),
].map(item => ({
    ...item,
    project: config.project,
    build: config.buildName
}));