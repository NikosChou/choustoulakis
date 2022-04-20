<template>
  <v-row id="BasicInfo" justify="center" align="center" class="py-10">
    <v-col cols="12" sm="4" class="d-flex justify-center">
      <v-row align="center">
        <v-col cols="12" class="d-flex justify-center"
          ><v-avatar size="200" class="elevation-10 img-avtr">
            <v-img src="/static/nikos.jpg" position="down"></v-img> </v-avatar
        ></v-col>
        <v-col cols="12" class="d-flex justify-center">
          <SliderChip :items="social" />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            link
            href="/api/static/choustoulakis_cv.pdf"
            download
            outlined
            color="primary"
          >
            Download CV
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="8" class="px-0">
      <v-card shaped>
        <v-card-text class="info--text">
          <v-row
            class="font-weight-black"
            v-for="(i, index) in infos"
            :key="index"
          >
            <v-col>
              <v-row>
                <v-col cols="1">
                  <v-icon color="secondary">{{ i.icon }}</v-icon>
                </v-col>
                <v-col cols="11" class="info--text"
                  ><span v-if="i.href">
                    <a :href="i.href" class="text-link" target="blank">{{
                      i.text
                    }}</a></span
                  ><span v-else>{{ i.text }}</span></v-col
                >
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SliderChip from "@/components/SliderChip";
export default {
  components: {
    SliderChip,
  },
  props: {
    infos: [],
    social: [],
  },
};
</script>

<style lang="scss" scoped>
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
      filter: saturate(0);
    }
  }
}
.sticky {
  position: sticky;
  top: 4rem;
}
.text-title {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Clicker Script";
}
</style>
