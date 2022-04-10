<template>
  <BasicRow id="Summary">
    <template v-slot:icon>fas fa-archive</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.summary")
    }}</template>
    <template v-slot:right>
      <v-card shaped>
        <v-card-title v-html="summary.title"> </v-card-title>
        <v-card-text class="info--text" v-html="summary.body"> </v-card-text>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";
export default {
  components: { BasicRow },
  props: {
    summary: {},
  },
};
</script>
