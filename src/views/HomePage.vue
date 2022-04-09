<template>
  <v-container fluid class="pa-0">
    <Profile :post="profilePost" />
    <AboutMe :post="aboutMePost" />
    <!-- <Services /> -->
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Profile from "@/components/homepage/Profile";
import AboutMe from "@/components/homepage/AboutMe";

const { mapActions, mapState } = createNamespacedHelpers("homepage");

export default {
  components: { Profile, AboutMe },
  created() {
    this.refreshHomepagePosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.homepagePosts,
    }),
    profilePost() {
      return this.posts.find((e) => e.reference === "homepage-1");
    },
    aboutMePost() {
      return this.posts.find((e) => e.reference === "homepage-2");
    },
  },
  methods: {
    ...mapActions(["refreshHomepagePosts"]),
  },
};
</script>
