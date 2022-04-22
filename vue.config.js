const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;
var webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: '"' + version + '"',
        },
      }),
    ],
  },
  pluginOptions: {
    sitemap: {
      urls: [
        "https://choustoulakis.de/",
        "https://choustoulakis.de/cv",
        "https://choustoulakis.de/impressum",
        "https://choustoulakis.de/privacy",
      ],
    },
  },
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.choustoulakis.de/",
        logLevel: "debug",
      },
    },
  },
};
