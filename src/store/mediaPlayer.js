export default {
  namespaced: true,
  state: {
    media: null,
    loading: false,
    visible: false,
    minimized: false,
    currentTime: 0,
    duration: 0,
    playerStatus: "paused" // 'playing', 'paused', 'stopped'
  },
  getters: {
    media(state) {
      return state.media;
    },
    loading(state) {
      return state.loading;
    },
    visible(state) {
      return state.visible;
    },
    minimized(state) {
      return state.minimized;
    },
    currentTime(state) {
      return state.currentTime;
    },
    duration(state) {
      return state.duration;
    },
    playerStatus(state) {
      return state.playerStatus;
    }
  },
  mutations: {
    media(state, val) {
      state.media = val;
    },
    loading(state, val) {
      state.loading = val;
    },
    visible(state, val) {
      state.visible = val;
    },
    minimized(state, val) {
      state.minimized = val;
    },
    currentTime(state, val) {
      state.currentTime = val;
    },
    duration(state, val) {
      state.duration = val;
    },
    playerStatus(state, val) {
      state.playerStatus = val;
    }
  },
  actions: {
    media({ commit }, val) {
      commit("media", val);
    },
    loading({ commit }, val) {
      commit("loading", val);
    },
    visible({ commit }, val) {
      commit("visible", val);
    },
    minimized({ commit }, val) {
      commit("minimized", val);
    },
    currentTime({ commit }, val) {
      commit("currentTime", val);
    },
    duration({ commit }, val) {
      commit("duration", val);
    },
    playerStatus({ commit }, val) {
      commit("playerStatus", val);
    }
  }
};
