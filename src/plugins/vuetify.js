import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
      variations: true,
    },
    themes: {
      light: {
        primary: "#453936",
        secondary: "#303030",
        accent: "#00B0FF",
        anchor: "FDF7FA",
        error: "#e91e63",
        background: "#f0f0f0",
        warning: "#cddc39",
        info: "#f0f0f0",
        success: "#4caf50",
      },
      dark: {
        primary: "#3ABEFF",
        anchor: "#FDF7FA",
        secondary: "#FDF7FA",
        background: "#303030",
        info: "#FDF7FA",
        accent: "#D84797",
        error: "#e91e63",
        warning: "#cddc39",
        success: "#4caf50",
      },
    },
  },
});
