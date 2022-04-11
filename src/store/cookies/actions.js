
export default {
  refreshCookiesAnswer({ commit }) {
    const answer = localStorage.getItem('cookies_accepted') === 'true';
    console.log(answer);
    commit('accept', answer);
  }
};