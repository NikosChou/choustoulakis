import axios from 'axios';

export default {
  refreshHomepagePosts({ commit }) {
    return axios
      .get('/static/api/posts/homepage.json')
      .then(({ data }) => {
        commit('updateHomepagePosts', data.data);
        return data;
      });
  }
};