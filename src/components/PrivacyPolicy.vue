<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__delay-2s"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <v-container class="container-wrapper" v-if="visible">
      <v-row>
        <v-col cols="12" class="pb-0">
          <p>
            Cookies sind Dateien mit geringen Datenmengen, die eine anonyme
            eindeutige Kennung enthalten können. Cookies werden von einer
            Website an Ihren Browser gesendet und auf der Festplatte Ihres
            Computers gespeichert. Wie viele Websites verwenden wir "Cookies",
            um Informationen zu sammeln.
          </p>
          <p class="mb-0">
            Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder
            anzugeben, wann ein Cookie gesendet wird. Wenn Sie jedoch keine
            Cookies akzeptieren, können Sie möglicherweise einige Teile unserer
            Website nicht verwenden.
            <router-link class="text-link" to="/privacy">
              Privacy Policy
            </router-link>
          </p>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="auto">
          <v-btn elevation="0" color="primary" @click="accept(true)">
            Accept
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn elevation="0" color="accent" text @click="accept(false)">
            No thanks
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapState } = createNamespacedHelpers("cookies");

export default {
  computed: {
    ...mapState({
      visible: (state) => state.showCookies,
    }),
  },
  methods: {
    ...mapMutations(["accept"]),
  },
};
</script>

<style lang="scss" scoped>
.container-wrapper {
  background: var(--v-background-base);
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
