import Vue from "vue";
import VueGtag from "vue-gtag";

export default {
  accept: (state, accepted) => {
    state.accepted = accepted;
    localStorage.setItem('cookies_accepted', accepted);
    if (accepted === true) {
      Vue.use(VueGtag, {
        config: { id: "G-78WG4R0RQM" }
      });
    }
  }
};