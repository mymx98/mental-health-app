import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blur: false,
    mediaPlayerVisible: false,
    mediaPlayerFloatingVisible: false
  },
  getters: {
    blur(state) {
      return state.blur;
    },
    mediaPlayerVisible(state) {
      return state.mediaPlayerVisible;
    },
    mediaPlayerFloatingVisible(state) {
      return state.mediaPlayerFloatingVisible;
    }
  },
  mutations: {
    blur(state, val) {
      state.blur = val;
    },
    mediaPlayerVisible(state, val) {
      state.mediaPlayerVisible = val;
    },
    mediaPlayerFloatingVisible(state, val) {
      state.mediaPlayerFloatingVisible = val;
    }
  },
  actions: {
    blur({ commit }, val) {
      commit("blur", val);
    },
    mediaPlayerVisible({ commit }, val) {
      commit("mediaPlayerVisible", val);
    },
    mediaPlayerFloatingVisible({ commit }, val) {
      commit("mediaPlayerFloatingVisible", val);
    }
  }
});
