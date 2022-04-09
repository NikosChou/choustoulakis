<template>
  <v-container class="full-page fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" class="d-flex justify-center text--center"
        ><h2 data-aos="fade-up" data-aos-anchor-placement="top">
          Über mich
        </h2></v-col
      >
      <v-col cols="12" style="height:10rem"></v-col>
      <v-col cols="12" md="6" class="d-flex justify-center"
        ><v-img max-height="40vh" contain src="/undraw_profile_6l1l.svg"></v-img
      ></v-col>
      <v-col cols="12" md="6" sm="8">
        <br />
        <div>
          <p>
            Hallo!. Ich heiße <i>Nikolaos Choustoulakis</i>. Seit
            <b>2014</b> arbeite ich in Deutschland als <b>Softwareingenieur</b>.
            <br />
            Ich habe in
            <a
              href="https://ece.hmu.gr/en/home/"
              target="blank"
              class="text-link"
              >Hellenic Mediterranean University in Griechenland
              <b>Electrical &amp; Computer Engineering</b> studiert
            </a>
          </p>
          <p>
            Meine Schwerpunkte sind <b>Java</b>, <b>Scala</b>, <b>VueJs</b>,
            <b>Angular</b>, <b>Spring</b>, <b>Microservice</b>,
            <b>Kubernetes</b>, <b>Docker</b>, <b>RESTful Webservices</b>,
            <b>JPA</b>. Ich programmiere in JVM mit <b>Scala</b> &amp;
            <b>Java</b>. Für FE benutze ich <b>VueJs</b>.
          </p>
        </div>
        <div class="text-center">
          <v-btn large to="/cv" class="button">Kontakt</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

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
