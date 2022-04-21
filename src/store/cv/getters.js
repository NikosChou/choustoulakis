export default {
  basics: (state) => {
    return state.resume.basics;
  },
  fullName: (state, getters) => {
    return getters.basics.name;
  },
  social: (state, getters) => {
    return getters.social;
  },
  infos: (state, getters) => {
    return getters.infos;
  },
  summary: (state, getters) => {
    return getters.summary;
  },
  languages: (state, getters) => {
    return getters.languages;
  },
};
