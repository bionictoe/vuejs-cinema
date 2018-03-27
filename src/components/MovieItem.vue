<template>
  <div class="movie">
    <div class="movie-col-left">
      <img :src="movie.Poster">
    </div>
    <div class="movie-col-right">
      <div class="movie-title">
        <router-link :to="{ name: 'movie', params: { id: movie.imdbID } }"><h2>{{ movie.Title }}</h2></router-link>
        <span class="movie-rating">{{ movie.Rated }}</span>
      </div>
      <div class="movie-rating" v-for="rating in movie.Ratings">
        {{ rating.Source }}: {{ rating.Value.split('/')[0] }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: [ 'movie' ],
    created() {
      console.log(this.movie);
    }
  }
</script>
<style>

</style>