import './fontawesome.js';
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import store from "./store";
import router from "./router";
import VueWaypoint from "vue-waypoint";


Vue.use(VueWaypoint);
Vue.use(i18n);
Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    i18n,
    store,
    render: h => h(App)
}).$mount("#app");
