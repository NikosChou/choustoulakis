<template>
  <v-container fluid class="pa-0">
    <Profile :post="profilePost" />
    <!-- <Services /> -->
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Profile from "@/components/homepage/Profile";

const { mapActions, mapState } = createNamespacedHelpers("homepage");

export default {
  components: { Profile },
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
  },
  methods: {
    ...mapActions(["refreshHomepagePosts"]),
  },
};
</script>
