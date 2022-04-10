import axios from 'axios';

export default {
  refreshProfileInfo({ commit }) {
    return axios
      .get('/static/api/posts/profile')
      .then(({ data }) => {
        commit('updateProfileInfos', data);
        commit('updateProfileSocial', data);
        commit('updateProfileSummary', data);
        commit('updateJobs', data);
        commit('updateSkills', data);
        commit('updateLanguages', data);
        commit('updateEducations', data)
        return data;
      });
  }
};