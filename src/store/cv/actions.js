import axios from 'axios';

export default {
  refreshEducation({ commit }) {
    return axios
      .get('/static/education.json')
      .then(({ data }) => {
        commit('updateEducation', data);
        return data;
      });
  },
  refreshInterests({ commit }) {
    return axios
      .get('/static/interests.json')
      .then(({ data }) => {
        commit('updateInterests', data);
        return data;
      });
  },
  refreshJobs({ commit }) {
    return axios
      .get('/static/jobs.json')
      .then(({ data }) => {
        commit('updateJobs', data);
        return data;
      });
  },
  refreshSkills({ commit }) {
    return axios
      .get('/static/skills.json')
      .then(({ data }) => {
        commit('updateSkills', data);
        return data;
      });
  },
  refreshPersonalInfo({ commit }) {
    return axios
      .get('/static/personal-info.json')
      .then(({ data }) => {
        commit('updatePersonalInfo', data);
        return data;
      });
  },
  refreshResume({ commit }) {
    return axios
      .get('/static/resume.json')
      .then(({ data }) => {
        commit('updateResume', data);
        return data;
      });
  },
  refreshLanguages({ commit }) {
    return axios
      .get('/static/languages.json')
      .then(({ data }) => {
        commit('updateLanguages', data);
        return data;
      });
  }
};