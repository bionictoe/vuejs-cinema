<template>
  <div id="overview">
    <div class=main>
      <movie-list :genre="genre" :time="time" :movies="movies"></movie-list>
      <movie-filter></movie-filter>
    </div>
  </div>
</template>
<script>
  import MovieList from './MovieList.vue';
  import MovieFilter from './MovieFilter.vue';

  export default {
    props: [ 'genre', 'time', 'movies'],
    components: {
      MovieList,
      MovieFilter
    }
  }
</script>