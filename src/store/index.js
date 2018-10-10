import Vue from "vue";
import Vuex from "vuex";
import mediaPlayer from "./mediaPlayer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mediaPlayer
  },
  state: {
    blur: false,
    navigationVisible: true,
    mediaPlayerVisible: false,
    mediaPlayerFloatingVisible: false,
    mediaSrc: ""
  },
  getters: {
    blur(state) {
      return state.blur;
    },
    navigationVisible(state) {
      return state.navigationVisible;
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
    navigationVisible(state, val) {
      state.navigationVisible = val;
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
    navigationVisible({ commit }, val) {
      commit("navigationVisible", val);
    },
    mediaPlayerVisible({ commit }, val) {
      commit("mediaPlayerVisible", val);
    },
    mediaPlayerFloatingVisible({ commit }, val) {
      commit("mediaPlayerFloatingVisible", val);
    }
  }
});
