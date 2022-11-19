import Vue from "vue";
import Vuex from "vuex";

import { loginUser, registerUser } from "@/services/auth.service";
import { axiosToken } from "@/utils/http";

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
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit("setUser", user);
      commit("setToken", token);

      axiosToken.set(token);
    },

    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit("setUser", user);
      commit("setToken", token);

      axiosToken.set(token);
    },
  },
  modules: {},
});
