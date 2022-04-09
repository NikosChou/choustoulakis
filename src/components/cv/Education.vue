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
  data() {
    return {
      items: [
        {
          title: this.$t("application.education.university.name"),
          organization: this.$t("application.education.university.department"),
          href: "https://ece.hmu.gr/en",
          icon:
            "https://sw.hmu.gr/wp-content/uploads/2020/04/logo-elmepa-100-white.png"
        },
        {
          title: "Oracle Certified Professional, Java SE 8 Programmer",
          organization: "Oracle",
          href:
            "https://www.credly.com/badges/224a742f-870e-403c-acde-96d39d464a6e/public_url",
          icon: "/oracle-certified-professional-java-se-8-programmer.png"
        },
        {
          title: "Oracle Certified Associate, Java SE 8 Programmer",
          organization: "Oracle",
          href:
            "https://www.credly.com/badges/a9f13c74-407e-45c5-8d84-fa3a40ed40a4/public_url",
          icon: "/oracle-certified-associate-java-se-8-programmer.png"
        },
        {
          title: "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
          organization: "Udemy",
          href:
            "https://www.udemy.com/certificate/UC-83bd3905-2f28-4bb6-9331-1a2ce320c70a/",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
          title: "Functional Program Design in Scala",
          organization: "Coursera / École Polytechnique Fédérale de Lausanne",
          href: "https://coursera.org/share/a790f6529fe2c1d4935d544a2abc4885",
          icon: "/static/scala-spiral.png"
        },
        {
          title: "Functional Programming Principles in Scala",
          organization: "Coursera / École Polytechnique Fédérale de Lausanne",
          href: "https://coursera.org/share/7fee3c63cbd37db262d3bed8f2c82fd9",
          icon: "/static/scala-spiral.png"
        },
        {
          title: "Docker Mastery: with Kubernetes +Swarm",
          organization: "Udemy",
          href: "https://www.udemy.com/certificate/UC-23708352-680d-431f-be7c-650d6fe96feb",
          icon: "/static/docker.png"
        }
      ]
    };
  }
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
