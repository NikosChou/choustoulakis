<template>
  <v-footer padless>
    <v-container>
      <v-row justify="center" justify-sm="space-between">
        <v-col cols="auto">
          <span class="info--text">&copy;</span>
          {{ new Date().getFullYear() }}
          <strong>{{ $t("application.name") }}</strong>
          <small class="px-1">
            Made with
            <v-icon
              class="animate__animated animate__infinite animate__heartBeat"
              small
              color="accent"
            >
              fas fa-heart
            </v-icon>
          </small>
          <span class="text-caption ml-1">v{{ packageVersion }}</span>
        </v-col>
        <v-col cols="auto" class="">
          <router-link class="secondary--text mr-3 text-link" to="/impressum">
            impressum
          </router-link>
          <router-link class="secondary--text text-link" to="/privacy">
            privacy
          </router-link>
          <v-btn
            class="white--text accent ml-4"
            target="_blank"
            x-small
            href="https://github.com/NikosChou/choustoulakis"
          >
            <strong>source</strong>
            <v-icon right x-small>fab fa-github</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    packageVersion: String,
  },
};
</script>

<style lang="scss" scoped>
.heart {
  animation: heartbeat 3s alternate-reverse infinite;
  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
}
</style>
