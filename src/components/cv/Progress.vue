<template>
  <v-row>
    <v-col v-if="icon" cols="1"
      ><v-icon color="primary">{{ icon }}</v-icon></v-col
    >
    <v-col cols="2" class="text-no-wrap">{{ name }}</v-col>
    <v-col>
      <v-card class="my-1">
        <v-progress-linear
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions
          }"
          :value="valueT"
          color="secondary"
          height="25"
          reactive
        ></v-progress-linear>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: null,
    name: null,
    value: null
  },
  data() {
    return {
      valueT: 0,
      id: null,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1]
      }
    };
  },
  methods: {
    onWaypoint({ going }) {
      if (!this.id && going === this.$waypointMap.GOING_IN) {
        this.id = setInterval(this.fn, 50);
      }
    },
    fn() {
      this.valueT = this.valueT + 2;
      if (this.valueT >= this.value) {
        clearInterval(this.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  font-family: "Open Sans";
  font-weight: 600;
}
</style>
