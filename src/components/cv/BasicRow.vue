<template>
  <v-expansion-panel class="background">
    <v-expansion-panel-header>
      <v-row justify="start" align="center" class="sticky">
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
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row justify="end">
        <v-col cols="12" md="8">
          <slot name="right"></slot>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped>
span {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Clicker Script";
}
</style>
