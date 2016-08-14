var util = require('../util');

module.exports = function (param) {
    util.postMessage(param.channel, 'Howdy');
};