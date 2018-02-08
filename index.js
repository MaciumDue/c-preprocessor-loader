const loaderUtils = require('loader-utils');
const compiler = require("c-preprocessor");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  compiler.compile(source, options, (err, result) => {
    this.callback(err, result);
  });
};
