<template>
  <v-container fluid class="full-page fill-height">
    <v-row v-if="post" justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <v-avatar size="15rem" class="elevation-10 img-avtr">
          <v-img :src="post.image" position="down"> </v-img>

          <svg viewBox="0 0 500 500" class="curved-text">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              fill="transparent"
            />
            <text width="500">
              <textPath xlink:href="#curve" class="text">#OPENTOWORK</textPath>
            </text>
          </svg>
        </v-avatar>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center py-0"
        data-aos="fade-right"
        data-aos-anchor-placement="top"
      >
        <h1 class="text-center">{{ post.title.split("-")[0] }} -</h1>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center py-0"
        data-aos="fade-left"
        data-aos-anchor-placement="top"
      >
        <h2 class="text-center">{{ post.title.split("-")[1] }}</h2>
      </v-col>
      <v-col cols="7">
        <hr />
      </v-col>
      <v-col
        cols="12"
        md="6"
        sm="7"
        class="d-flex justify-center"
        data-aos="fade-in"
        data-aos-anchor-placement="top"
      >
        <p class="text-center rounded pa-5" v-html="post.body"></p>
      </v-col>
      <v-col
        cols="12"
        class="d-flex justify-center"
        data-aos="fade-in"
        data-aos-anchor-placement="top"
      >
        <v-btn large to="/cv" color="accent" v-text="post.action"></v-btn>
      </v-col>
    </v-row>
    <v-row class="shape-fill">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
      </svg>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    post: null,
  },
  data() {
    return {
      avatarSize: 200,
      oldScroll: null,
      lastScroll: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.curved-text {
  position: absolute;
  font-size: 3em;
  .text {
    fill: var(--v-primary-base);
    font-weight: 900;
  }
}
.full-page {
  height: 100vh;
  position: relative;
  background-image: url("~@/assets/IMG_9082-Pano.jpg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  .img-avtr {
    filter: saturate(1);
    transition: 1s;
    border: solid;
    border-width: 1px;
    border-color: var(--v-accent-base);
    //animation: desaturate 5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s forwards;

    &:hover {
      animation: none;
    }

    @keyframes desaturate {
      0% {
        filter: saturate(1);
      }
      100% {
        filter: saturate(0.2);
      }
    }
  }
  h1 {
    font-family: "Dancing Script";
    font-size: 3.7rem;
    font-weight: bold;
    text-shadow: -1px 0px 1px rgb(0 0 0 / 30%);
  }
  h2 {
    font-family: "Open Sans";
    font-size: 2.3rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--v-primary-base);
    text-shadow: -1px 0px 1px rgb(0 0 0 / 30%);
  }
  p {
    text-shadow: -1px 1px 1px #00000073;
    box-shadow: inset 0 0 27px 15px #00000030, 0 0 9px 5px #00000030;
    font-family: "Open Sans";
    padding: 0 2rem;
    background: #0000003b;
    font-weight: bold;
  }

  button {
    background-color: var(--v-primary-base) !important;
    border: solid;
    border-width: 1px;
    border-color: var(--v-primary-base);
    font-weight: bold;
    font-size: 1.4rem;
    transition: 1s;

    &:hover {
      background-color: transparent !important;
      color: var(--v-primary-base);
    }
  }

  .shape-fill {
    transform: rotate(180deg);
    position: absolute;
    bottom: 10px;
    width: 100%;
    svg {
      width: calc(100% + 1.3px);
      height: 62px;
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      path {
        fill: #303030;
      }
    }
  }
}
</style>
