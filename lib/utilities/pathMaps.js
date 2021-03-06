"use strict";

const { asynchronousUtilities } = require("necessary");

const { forEach } = asynchronousUtilities;

function asynchronousForEach(pathMaps, callback, done) {
  forEach(
    pathMaps,
    (pathMap, next, done, context, index) => {
      const { sourcePath, targetPath, directory } = pathMap;

      callback(sourcePath, targetPath, directory, next, done, index);
    },
    done
  );
}

module.exports = {
  asynchronousForEach: asynchronousForEach
};
