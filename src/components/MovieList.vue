<template>
    <div id="movie-list">
        <MovieItem v-for="movie in filteredMovies" class="movie" :movie="movie"></MovieItem>
    </div>
</template>
<script>
    import genres from '../util/genres';
    import MovieItem from './MovieItem.vue'
    export default {
        props: [ 'genre', 'time', 'movies'],
        methods: {
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                } else {
                    return this.genre.find(genre => movie.genre === genre);
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        },
        components: {
            MovieItem
        }
    }
</script>