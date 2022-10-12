const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  entry: "index.js",
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Dancing Script" },
        { family: "Roboto" },
        { finally: "Open Sans" },
        { finally: "Clicker Script" },
      ],
      /* ...options */
    }),
  ],
};
