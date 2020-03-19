import axios from "axios";
import parse from "csv-parse/lib/sync";
import Vue from 'vue';
// import get from 'lodash-es/get';
// import filter from 'lodash-es/filter';
// import find from 'lodash-es/find';
// import server from "./server";
let loaded;
let store = Vue.observable({
  dogs: [],
  error: null,
  async loadFromServer(forceReload) {
    if (!loaded || forceReload) {
      let res = await axios.get('statics/sos-data.csv');
      store.dogs = parse(res.data, {
        columns: true,
        skip_empty_lines: true
      });
      loaded = true;
    }
  },
});
export default store;
