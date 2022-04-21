import Vue from "vue";
import VueGtag from "vue-gtag";

export default {
  accept: (state, accepted) => {
    console.log(accepted);
    if (accepted === undefined || accepted === null) {
      return;
    }
    state.accepted = accepted;
    state.showCookies = false;
    localStorage.setItem("cookies_accepted", accepted);
    if (accepted === true) {
      Vue.use(VueGtag, {
        config: { id: "G-78WG4R0RQM" },
      });
    }
  },
};
