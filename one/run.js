#!/usr/bin/env node

const { startServer, createConfiguration } = require("snowpack");
const path = require("path");
const config = createConfiguration({
  // works for "one" dependencies but fails for "two":
  // Error: Package "emojisplosion" not found. Have you installed it?
  //root: __dirname,

  // works for "two" dependencies but fails for "one":
  // Error: Package "canvas-confetti" not found. Have you installed it?
  root: process.cwd(),
  mount: {
    // mounts one/src, imports canvas-confetti package
    [path.join(process.cwd(), "./src/")]: "/",
    // mounts two/src, imports emojisplosion package
    [path.join(__dirname, "./src/")]: "/",
  },
});
startServer({ config });
