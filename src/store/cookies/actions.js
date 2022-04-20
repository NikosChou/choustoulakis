
export default {
  refreshCookiesAnswer({ commit }) {
    const answer = localStorage.getItem('cookies_accepted');
    commit('accept', answer);
  }
};