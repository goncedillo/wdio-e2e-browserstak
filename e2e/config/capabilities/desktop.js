const devices = require("./devices/desktop");

module.exports = config => [
    ...(Object.keys(devices).map(key => ({ ...devices[key], devName: key })))
].map(item => ({
    ...item,
    project: config.project,
    build: config.buildName
}));