<template>
  <v-row class="py-10">
    <v-col cols="12" md="4">
      <v-row
        justify="start"
        align="center"
        class="sticky"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
      >
        <v-col cols="1">
          <v-icon color="accent">
            <slot name="icon"></slot>
          </v-icon>
        </v-col>
        <v-col cols="10">
          <span class="secondary--text font-italic ml-3">
            <slot name="title"></slot>
          </span>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="8"
      class="justify-space-between px-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top"
    >
      <slot name="right"></slot>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 4rem;
}
span {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Clicker Script";
}
</style>
