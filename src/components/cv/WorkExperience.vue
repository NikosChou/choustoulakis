<template>
  <BasicRow id="Workexperience">
    <template v-slot:icon>fas fa-brain</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.experience")
    }}</template>
    <template v-slot:right>
      <v-card
        v-for="(job, index) in jobs"
        :key="index"
        shaped
        class="my-1"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      >
        <v-card-title class="job-title">
          {{ job.title }}
        </v-card-title>
        <v-card-subtitle class="primary--text"
          ><h4>{{ job.company }}</h4></v-card-subtitle
        >
        <v-card-subtitle class="primary--text">{{ job.time }}</v-card-subtitle>
        <v-card-text class="info--text job-description">
          <div v-html="job.description"></div>
          <br />
          <div>
            <v-chip
              v-for="(point, i) in job.points.split(',')"
              :key="i"
              outlined
              small
              color="secondary"
              class="mr-1 mb-1 text-uppercase"
              >{{ point }}</v-chip
            >
          </div>
        </v-card-text>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";
export default {
  components: { BasicRow },
  props: {
    jobs: null,
  },
};
</script>

<style lang="scss" scoped>
.job-title {
  font-family: "Open Sans", sans-serif;
}
.job-description {
  font-family: "Roboto", sans-serif;
}
</style>
