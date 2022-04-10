<template>
  <BasicRow id="Education">
    <template v-slot:icon>fas fa-university</template>
    <template v-slot:title>{{
      $t("application.navigation.cv.item.education")
    }}</template>
    <template v-slot:right>
      <v-card
        v-for="(item, index) in items"
        :key="index"
        class="my-1 my-card"
        hover
        shaped
        data-aos="fade-up"
        data-aos-anchor-placement="top"
        target="blank"
        :href="item.href"
      >
        <v-container>
          <v-row align="center" justify="space-between">
            <v-col cols="2"
              ><v-avatar size="4rem" class="bordered-icon"
                ><v-img
                  position="center center"
                  :src="item.icon"
                ></v-img></v-avatar
            ></v-col>
            <v-col cols="10">
              <v-card-title class="title"> {{ item.title }}</v-card-title>
              <v-card-subtitle class="subtitle">{{
                item.organization
              }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </BasicRow>
</template>

<script>
import BasicRow from "@/components/cv/BasicRow";
export default {
  components: { BasicRow },
  props: {
    items: null,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: "Open Sans";
  font-size: 1rem !important;
  color: var(--v-primary-base) !important;
}
.subtitle {
  font-family: "Open Sans";
  font-size: 0.8rem !important;
  font-weight: 600;
  color: var(--v-accent-base) !important;
}

div {
  word-break: keep-all;
}

.bordered-icon {
  border: solid;
  border-width: 1px;
  border-color: var(--v-accent-base);
}

.my-card {
  filter: saturate(0);
  transition: filter 1s !important;

  &:hover {
    filter: saturate(1);
  }
}
</style>
