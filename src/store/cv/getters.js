export default {
    basics: state => {
      return state.resume.basics;
    },
    fullName: (state, getters) => {
      return getters.basics.name;
    },
  }