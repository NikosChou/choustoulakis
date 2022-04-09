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
            href="/static/CV_Nikolaos_Choustoulakis.pdf"
            download
            outlined
            color="primary"
          >
            Download CV
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="8" class=" px-0">
      <v-card shaped>
        <v-card-text class="info--text">
          <v-row
            class=" font-weight-black"
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
    SliderChip
  },
  computed: {
    infos() {
      return [
        {
          icon: "fas fa-user",
          text: this.$t("application.navigation.cv.name")
        },
        {
          icon: "fas fa-briefcase",
          text: this.$t("application.info.job-title")
        },
        {
          icon: "fas fa-map",
          text: this.$t("application.info.address")
        },
        {
          icon: "fas fa-birthday-cake",
          text: this.$t("application.info.birthday")
        },
        {
          title: "Telephone",
          icon: "fas fa-phone-alt",
          href: "tel:00491607279057",
          text: "+49 160 72 79 057",
          selected: false
        },
        {
          title: "Email",
          icon: "fas fa-envelope",
          href: "mailto:nikolaos@choustoulakis.de",
          text: "nikolaos@choustoulakis.de",
          selected: false
        }
      ];
    }
  },
  data() {
    return {
      social: [
        {
          title: "Github",
          icon: "fab fa-github",
          href: "https://github.com/NikosChou",
          text: "Github",
          selected: false
        },
        {
          title: "Linkedin",
          icon: "fab fa-linkedin",
          href: "https://www.linkedin.com/in/nikolaos-choustoulakis-0a07b5201",
          text: "Linkedin",
          selected: false
        },
        {
          title: "Facebook",
          icon: "fab fa-facebook-f",
          href: "https://www.facebook.com/nikos.ch.984",
          text: "Facebook",
          selected: false
        },
        {
          title: "Instagram",
          icon: "fab fa-instagram",
          href: "https://www.instagram.com/nikos_lentas/",
          text: "Instagram",
          selected: false
        }
      ]
    };
  }
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
