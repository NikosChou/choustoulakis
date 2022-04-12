import axios from 'axios';

export default {
  refreshHomepagePosts({ commit }) {
    return axios
      .get('/api/posts/homepage')
      .then(({ data }) => {
        commit('updateHomepagePosts', data.data);
        return data;
      });
  }
};