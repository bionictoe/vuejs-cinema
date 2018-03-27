import Vue from 'vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import { checkFilter } from './util/bus'

const bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {get() { return this.$root.bus }});

// routing
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './util/routes.js';
const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movieIds: ['tt0468569', 'tt0110912', 'tt1375666', 'tt0080684', 'tt0073486', 'tt0133093', 'tt0076759', 'tt0107290', 'tt0090605', 'tt0095250'],
    movies: [],
    bus
  },
  created() {
    var vm = this;
    // 
    this.movieIds.forEach(function (id) {
      var address = 'http://www.omdbapi.com/?i=' + id + '&apikey=293117e'
      vm.$http.get(address).then(response => {
        vm.movies.push(response.data);
      });
    });

    this.$bus.$on('check-filter', checkFilter.bind(this));
  },
  router
});