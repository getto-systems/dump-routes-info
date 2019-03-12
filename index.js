"use strict";

exports.dump = (file, encode) => {
  const yaml = require("js-yaml");
  const fs = require("fs");

  dump([], yaml.safeLoad(fs.readFileSync(file, encode)));
};

const dump = (path, data) => {
  if (data.forEach) {
    data.forEach((entry) => {
      const current = path.concat(entry.name);

      if (entry.entries) {
        dump(current, entry.entries);
      } else {
        console.log(JSON.stringify({
          info: {
            path: current.join("/"),
            module: current.map((path) => {
              return path.split("_").map((tip) => {
                if (tip.length == 0) {
                  return tip;
                } else {
                  return tip[0].toUpperCase() + tip.substring(1);
                }
              }).join("");
            }).join("."),
          },
          entry: entry,
        }));
      }
    });
  }
};
