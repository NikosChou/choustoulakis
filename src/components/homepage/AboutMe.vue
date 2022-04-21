<template>
  <v-container class="full-page fill-height">
    <v-row v-if="post" justify="center" align="center">
      <v-col cols="12" class="d-flex justify-center text--center"
        ><h2
          data-aos="fade-up"
          data-aos-anchor-placement="top"
          v-text="post.title"
        ></h2>
      </v-col>
      <v-col cols="12" style="height: 10rem"></v-col>
      <v-col cols="12" md="6" class="d-flex justify-center"
        ><v-img v-if="post.image" max-height="40vh" contain :src="post.image">
        </v-img>
      </v-col>
      <v-col cols="12" md="6" sm="8">
        <div v-html="post.body"></div>
        <v-row justify="center" class="mt-10">
          <v-col cols="auto">
            <v-btn large to="/cv" class="button" v-text="post.action"> </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    post: null,
  },
};
</script>

<style lang="scss" scoped>
.full-page {
  padding-bottom: 10rem;

  h2 {
    font-size: 4rem;
    color: var(--v-info-base);
    text-shadow: -1px 0px 1px rgb(255 255 255 / 40%);
    font-family: "Open Sans";
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  h3 {
    font-size: 2rem;
    color: var(--v-info-base);
    text-shadow: -1px 0px 1px rgb(255 255 255 / 40%);
    font-family: "Open Sans";
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  p {
    font-family: "Roboto";
  }

  .button {
    background-color: var(--v-accent-base) !important;
    border: solid;
    border-width: 1px;
    border-color: var(--v-accent-base);
    font-size: 1.1rem;
    transition: 1s;

    &:hover {
      background-color: transparent !important;
      color: var(--v-accent-base);
    }
  }
}
</style>
