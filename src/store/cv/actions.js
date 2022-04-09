import axios from 'axios';

export default {
  refreshLanguages({ commit }) {
    return axios
      .get('/static/languages.json')
      .then(({ data }) => {
        commit('updateLanguages', data);
        return data;
      });
  },
  refreshProfileInfo({ commit }) {
    return axios
      .get('/static/api/posts/profile')
      .then(({ data }) => {
        commit('updateProfileInfos', data);
        commit('updateProfileSocial', data);
        commit('updateProfileSummary', data);
        commit('updateJobs', data);
        commit('updateSkills', data);
        return data;
      });
  }
};