<template>
  <Appbar :fontsize="changeFontSize">
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view class="router-view"></router-view>
    </transition>
    <template v-slot:footer>
      <Footer />
    </template>
    <template v-slot:privacy>
      <PrivacyPolicy data-aos="fade-up" />
    </template>
  </Appbar>
</template>

<script>
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import aos from "aos";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("cookies");

export default {
  name: "App",
  beforeMount() {
    this.$vuetify.theme.themes.dark = true;
  },
  created() {
    this.refreshCookiesAnswer();
    aos.init({ duration: 1000 });
  },
  components: {
    Appbar,
    Footer,
    PrivacyPolicy
  },
  computed: {
    changeFontSize() {
      let style = document.documentElement.style;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          style.fontSize = "13px";
          return "13px";
        case "sm":
          style.fontSize = "13px";
          return "13px";
        case "md":
          style.fontSize = "14px";
          return "14px";
        case "lg":
          style.fontSize = "16px";
          return "16px";
        case "xl":
          style.fontSize = "16px";
          return "16px";
        default:
          return "14px";
      }
    }
  },
  methods: {
    ...mapActions(["refreshCookiesAnswer"]),
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

* {
  font-display: block;
}

.router-view {
  z-index: 1;
  background-color: #303030;
  box-shadow: 0 0 40px 0 rgb(0 0 0 / 10%);
}

a.text-link {
  text-decoration: none;
  color: white;
  font-weight: 700;
  background-image: linear-gradient(var(--v-accent-base), var(--v-accent-base));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  &::after {
    content: "\F061";
    opacity: 0;
    position: absolute;
    transform: translateX(-10px);
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: 1.2s;
  }

  &:hover::after {
    color: var(--v-accent-base);
  }

  &:hover {
    animation: hover 0.5s ease-out forwards;
    &::after {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes hover {
    0% {
      background-size: 0px 2px;
    }
    75% {
      background-size: 100% 2px;
    }
    100% {
      background-size: calc(100% - 1.4rem) 2px;
    }
  }
}
</style>
