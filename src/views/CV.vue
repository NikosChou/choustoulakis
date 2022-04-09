<template>
  <v-container fluid>
    <v-container>
      <BasicInfo class="pa-3" />
      <v-divider
        class="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      ></v-divider>
      <Summary class="pa-3" />
      <!-- <v-divider class="primary"></v-divider>
      <Interests /> -->
      <v-divider
        class="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      ></v-divider>
      <WorkExperience class="pa-3" :jobs="jobs[$i18n.locale]" />
      <v-divider
        class="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      ></v-divider>
      <Education class="pa-3" />
      <v-divider
        class="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      ></v-divider>
      <Skills class="pa-3" :skills="skills" />
      <v-divider
        class="primary"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      ></v-divider>
      <Languages class="pa-3" :languages="languages[$i18n.locale]" />
    </v-container>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import BasicInfo from "@/components/cv/BasicInfo";
import Summary from "@/components/cv/Summary";
import WorkExperience from "@/components/cv/WorkExperience";
import Education from "@/components/cv/Education";
import Skills from "@/components/cv/Skills";
import Languages from "@/components/cv/Languages";

const { mapActions, mapState } = createNamespacedHelpers("cv");

export default {
  name: "CV",
  components: {
    BasicInfo,
    Summary,
    WorkExperience,
    Education,
    Skills,
    Languages
  },
  created() {
    this.refreshJobs();
    this.refreshLanguages();
    this.refreshSkills();
  },
  computed: {
    ...mapState({
      jobs: state => state.jobs,
      languages: state => state.languages,
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions(["refreshJobs", "refreshLanguages", "refreshSkills"])
  },
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
@import "node_modules/animate.css/animate";
@import "node_modules/aos/dist/aos";
</style>
