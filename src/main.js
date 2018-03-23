import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    genre: [],
    time: [],
    movieIds: ['tt0468569', 'tt0110912', 'tt1375666', 'tt0080684', 'tt0073486', 'tt0133093', 'tt0076759', 'tt0107290', 'tt0090605', 'tt0095250'],
    movies: []
  },
  methods: {
    checkFilter(category, title, checked) {
      if (checked) {
        this[category].push(title);
      } else {
        let index = this[category].indexOf(title);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },
  components: {
    MovieList,
    MovieFilter
  },
  created() {
    var vm = this;
    // 
    this.movieIds.forEach(function (id) {
      var address = 'http://www.omdbapi.com/?i=' + id + '&apikey=293117e'
      vm.$http.get(address).then(response => {
        console.log(response.data);
        vm.movies.push(response.data);
      });
    });
    console.log(this.movies);
  }
});