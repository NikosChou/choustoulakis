<template>
  <v-footer padless>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <span class="info--text">&copy;</span>
          {{ new Date().getFullYear() }}
          <strong>{{ $t("application.name") }}</strong>
          <small>
            Made with
            <v-icon
              class="animate__animated animate__infinite animate__heartBeat"
              small
              color="accent"
              >fas fa-heart</v-icon
            >
          </small>
        </v-col>
        <v-col cols="auto"
          ><router-link class="white--text mr-3  text-link" to="/impressum">
            impressum
          </router-link>
          <router-link class="white--text text-link" to="/privacy">
            privacy
          </router-link></v-col
        >
      </v-row>
    </v-container>
  </v-footer>
</template>

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
