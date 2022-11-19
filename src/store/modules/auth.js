import {
  loginUser,
  registerUser,
  logoutUser,
  currentUser,
} from "@/services/auth.service";

const initialState = {
  user: null,
  token: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit("setUser", user);
      commit("setToken", token);
    },

    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit("setUser", user);
      commit("setToken", token);
    },

    async logout({ commit }) {
      await logoutUser();

      commit("clearData");
    },

    async currentUser({ commit }) {
      const { data } = await currentUser();

      commit("setUser", data);
    },
  },
};
