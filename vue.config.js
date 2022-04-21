module.exports = {
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
