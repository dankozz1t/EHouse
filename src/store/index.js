import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialState = {
  user: null,
  token: "",
};

export default new Vuex.Store({
  state: { ...initialState },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
});
