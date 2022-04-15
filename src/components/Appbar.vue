<template>
  <v-app>
    <v-app-bar
      elevation="0"
      app
      clipped-left
      color="transparent"
      collapse-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="info--text"
        ><span>{{ $t("application.name") }}</span></v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-group
          color="accent"
          v-for="i in items"
          @click="
            $router.push(i.route);
            drawer = !drawer;
          "
          :key="i.name"
          :prepend-icon="i.icon"
          append-icon=""
          :disabled="i.route === $route.path"
          :group="i.route"
        >
          <v-icon slot="prependIcon">{{ i.icon }}</v-icon>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase">{{
                i.name
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="item in i.items"
            :key="item.title"
            link
            active-class="red"
            @click="goto(item)"
          >
            <v-list-item-action class="pl-4">
              <v-icon v-text="item.icon" color="secondary"></v-icon>
            </v-list-item-action>
            <v-list-item-title
              v-text="item.title"
              class="secondary--text"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-0">
      <slot></slot>
    </v-main>
    <slot name="footer"></slot>
    <slot name="privacy"></slot>
  </v-app>
</template>

<script>
export default {
  components: {},
  computed: {
    options() {
      return {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic",
      };
    },
    items() {
      return [
        {
          name: "Home",
          icon: "fas fa-home",
          route: "/",
        },
        {
          name: "Lebenslauf",
          icon: "fas fa-user",
          route: "/cv",
          items: [
            {
              title: this.$t("application.navigation.cv.item.basicInfo"),
              id: "#BasicInfo",
              icon: "fab fa-old-republic",
            },
            {
              title: this.$t("application.navigation.cv.item.summary"),
              id: "#Summary",
              icon: "fas fa-archive",
            },
            {
              title: this.$t("application.navigation.cv.item.experience"),
              id: "#Workexperience",
              icon: "fas fa-brain",
            },
            {
              title: this.$t("application.navigation.cv.item.education"),
              id: "#Education",
              icon: "fas fa-university",
            },
            {
              title: this.$t("application.navigation.cv.item.skills"),
              id: "#Skills",
              icon: "fas fa-palette",
            },
            {
              title: this.$t("application.navigation.cv.item.languages"),
              id: "#Languages",
              icon: "fas fa-language",
            },
          ],
        },
      ];
    },
  },
  data() {
    return {
      drawer: false,
      permanent: false,
    };
  },
  methods: {
    setDrawer(val) {
      this.drawer = val;
    },
    goto(item) {
      this.$vuetify.goTo(item.id, this.options);
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  font-size: 2.5rem;
  font-family: "Clicker Script";
}
.v-toolbar__content {
  background-color: transparent;
}
</style>
