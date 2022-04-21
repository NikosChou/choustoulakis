import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#005bae",
        secondary: "#00B0FF",
        accent: "#ffffff",
        anchor: "FDF7FA",
        error: "#e91e63",
        warning: "#cddc39",
        info: "#453936",
        success: "#4caf50",
      },
      dark: {
        primary: "#3ABEFF",
        anchor: "FDF7FA",
        secondary: "#00B0FF",
        info: "#FDF7FA",
        accent: "#D84797",
        error: "#e91e63",
        warning: "#cddc39",
        success: "#4caf50",
      },
    },
  },
});
