<template>
  <v-container fluid class="pa-0">
    <Profile />
    <AboutMe />
    <!-- <Services /> -->
  </v-container>
</template>

<script>
import Profile from "@/components/homepage/Profile";
import AboutMe from "@/components/homepage/AboutMe";

export default {
  components: { Profile, AboutMe }
};
</script>
