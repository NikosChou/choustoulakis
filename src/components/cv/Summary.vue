<template>
  <BasicRow id="Summary">
    <template v-slot:icon>fas fa-archive</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.summary")
    }}</template>
    <template v-slot:right>
      <v-card shaped>
        <v-card-title v-html="$t('application.summary.text.title')">
        </v-card-title>
        <v-card-text class="info--text">
          <p v-html="$t('application.summary.text.0')"></p>
          <p v-html="$t('application.summary.text.1')"></p>
          <p v-html="$t('application.summary.text.2')"></p>
          <p v-html="$t('application.summary.text.3')"></p>
        </v-card-text>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";
export default {
  components: { BasicRow }
};
</script>
