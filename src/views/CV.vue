<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="7">
        <BasicInfo :infos="infos" :social="social" class="pa-3" />
        <v-expansion-panels flat popout multiple>
          <Summary :summary="summary" class="pa-3" />
          <WorkExperience class="pa-3" :jobs="jobs" />
          <Education :items="educations" class="pa-3" />
          <Skills class="pa-3" :skills="skills" />
          <Languages class="pa-3" :languages="languages" />
        </v-expansion-panels>
      </v-col>
    </v-row>
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
    Languages,
  },
  created() {
    this.refreshProfileInfo();
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobs,
      languages: (state) => state.languages,
      skills: (state) => state.skills,
      infos: (state) => state.infos,
      social: (state) => state.social,
      summary: (state) => state.summary,
      educations: (state) => state.educations,
    }),
  },
  methods: {
    ...mapActions(["refreshProfileInfo"]),
  },
};
</script>

<style lang="scss">
@import "node_modules/animate.css/animate";
@import "node_modules/aos/dist/aos";
</style>
