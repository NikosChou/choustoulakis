<template>
  <v-container class="container-wrapper" v-if="visible">
    <v-row
      ><v-col cols="12" class="pb-0"
        ><p>
          Cookies sind Dateien mit geringen Datenmengen, die eine anonyme
          eindeutige Kennung enthalten können. Cookies werden von einer Website
          an Ihren Browser gesendet und auf der Festplatte Ihres Computers
          gespeichert. Wie viele Websites verwenden wir "Cookies", um
          Informationen zu sammeln.
        </p>
        <p class="mb-0">
          Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder
          anzugeben, wann ein Cookie gesendet wird. Wenn Sie jedoch keine
          Cookies akzeptieren, können Sie möglicherweise einige Teile unserer
          Website nicht verwenden.
          <router-link class="text-link" to="/privacy"
            >Privacy Policy</router-link
          >
        </p></v-col
      >
      <v-col class="pt-4 text-start"
        ><v-btn elevation="0" color="primary" @click="accept(true)"
          >Accept</v-btn
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapState } = createNamespacedHelpers("cookies");

export default {
  computed: {
    ...mapState({
      visible: state => !state.accepted
    })
  },
  methods: {
    ...mapMutations(["accept"])
  }
};
</script>

<style lang="scss" scoped>
.container-wrapper {
  background: #212121;
  border-radius: 1rem;
  border-color: var(--v-primary-base);
  border: solid;
  position: fixed;
  border-width: 1px;
  width: 26rem;
  z-index: 100;
  bottom: 1rem;
  right: 1rem;
  font-family: "Roboto";
  font-size: 0.8rem;
  a {
    color: var(--v-accent-base);
    letter-spacing: 2px;
  }
}
</style>
