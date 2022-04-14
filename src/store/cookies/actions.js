
export default {
  refreshCookiesAnswer({ commit }) {
    const answer = localStorage.getItem('cookies_accepted') === 'true';
    commit('accept', answer);
  }
};