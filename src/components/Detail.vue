<template>
  <div id="detail" v-if="movie">
    <Movie-Item :movie="movie">
      <div class="movie-details">
        <p class="movie-genre">{{ movie.Genre }}</p>
        <p class="movie-plot">{{ movie.Plot }}</p>
        <table>
          <tr>
            <td>Release date: </td>
            <td>{{ movie.Released }}</td>
          </tr>
          <tr>
            <td>Running time: </td>
            <td>{{ movie.Runtime }}</td>
          </tr>
          <tr>
            <td>Director: </td>
            <td>{{ movie.Director }}</td>
          </tr>
          <tr>
            <td>Cast: </td>
            <td>{{ movie.Actors }}</td>
          </tr>
        </table>
      </div>
    </Movie-Item>
    <div class="home">
        <router-link :to="{ name: 'home' }">Back to results</router-link>
    </div>
  </div>
</template>
<script>
  import MovieItem from './MovieItem.vue';

  export default {
    props: ['movies'],
    computed: {
      movie() {
        // search movie array for movie with id that matches route params id
        let movie = this.movies.find(movie => movie.imdbID === this.$route.params.id);
        return movie ? movie : null;
      }
    },
    created() {

    },
    components: {
      MovieItem
    }
  }
</script>