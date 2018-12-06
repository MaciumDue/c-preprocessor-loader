const loaderUtils = require('loader-utils');
const compiler = require("c-preprocessor");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const callback = this.async();
  compiler.compile(source, options, (err, result) => {
    this.callback(err, result);
  });
};
