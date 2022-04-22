<template>
  <BasicRow id="Skills">
    <template v-slot:icon>fas fa-palette</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.skills")
    }}</template>
    <template v-slot:right>
      <v-card shaped>
        <v-card-text class="secondary--text">
          <Progress
            v-for="(s, index) in skills"
            :key="index"
            :value="s.value"
            :name="s.name"
            :icon="s.icon"
          />
        </v-card-text>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";
import Progress from "@/components/cv/Progress";

export default {
  components: { BasicRow, Progress },
  props: { skills: null },
};
</script>
