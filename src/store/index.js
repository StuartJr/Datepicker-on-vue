import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isItemSelected: false,
    listValue: [],
    listCheckbox: [],
    isEnabledBtn: true
  },
  mutations: {
    CHANGE_DISABLED_BTN: state => {
      state.isItemSelected = true;
    },
    CHANGE_ENABLED_BTN: state => {
      state.isItemSelected = false;
    },
    ERASE_MASSIV: state => {
      state.listValue = [];
    },
    ENABLED_CHECKBOX_BTN: state => {
      state.isEnabledBtn = false;
    },
    DISABLED_CHECKBOX_BTN: state => {
      state.isEnabledBtn = true;
    }
  },
  actions: {
    TOGGLE_BTN({ commit }) {
      commit("CHANGE_DISABLED_BTN");
    },
    TOGGLE_ENABLED_BTN({ commit }) {
      commit("CHANGE_ENABLED_BTN");
    },
    TOGGLE_MASSIV({ commit }) {
      commit("ERASE_MASSIV");
    },
    TOGGLE_BTN_DIS_CHECK({ commit }) {
      commit("DISABLED_CHECKBOX_BTN");
    },
    TOGGLE_BTN_ENB_CHECK({ commit }) {
      commit("ENABLED_CHECKBOX_BTN");
    }
  },
  getters: {
    DISABLED_BTN(state) {
      return state.isItemSelected;
    },
    ADD_ITEM_IN_LIST(state) {
      return state.listValue;
    },
    CHECKBOX_LIST(state) {
      return state.listCheckbox;
    },
    BTN_CHECKBOX(state) {
      return state.isEnabledBtn;
    }
  },
  modules: {}
});
