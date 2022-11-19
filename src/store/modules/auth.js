import { loginUser, registerUser, logoutUser } from "@/services/auth.service";
import { axiosToken } from "@/utils/http";

const initialState = {
  user: null,
  token: "",
};

export default {
  namespaced: true,

  state: { ...initialState },
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

    async logout({ commit }) {
      await logoutUser();

      commit("setUser", null);
      commit("setToken", "");

      axiosToken.unset();
    },
  },
};
