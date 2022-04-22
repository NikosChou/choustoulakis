<template>
  <BasicRow id="Interests">
    <template v-slot:icon>fas fa-eye</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.interests")
    }}</template>
    <template v-slot:right>
      <v-card shaped>
        <v-card-text class="secondary--text">
          <v-chip
            v-for="(i, index) in interests"
            :key="index"
            outlined
            color="info"
            class="mr-1 mb-1"
          >
            <v-avatar left>
              <v-icon color="secondary">{{ i.icon }}</v-icon>
            </v-avatar>
            {{ i.text }}
          </v-chip>
        </v-card-text>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";

export default {
  components: {
    BasicRow,
  },
  computed: {
    interests() {
      return [
        {
          icon: "fas fa-running",
          text: this.$t("application.interests.running"),
        },
        {
          icon: "fas fa-biking",
          text: this.$t("application.interests.biking"),
        },
        {
          icon: "fas fa-camera",
          text: this.$t("application.interests.photography"),
        },
        {
          icon: "fab fa-adobe",
          text: this.$t("application.interests.photoshop"),
        },
        {
          icon: "fas fa-swimmer",
          text: this.$t("application.interests.swimming"),
        },
        {
          icon: "fas fa-laptop",
          text: this.$t("application.interests.programming"),
        },
        {
          icon: "fab fa-internet-explorer",
          text: this.$t("application.interests.web-tec"),
        },
      ];
    },
  },
};
</script>
