<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <MovieItem v-for="movie in filteredMovies" :movie="movie"></MovieItem>
        </div>
        <div v-else-if="movies.length" class="no-results"> 
            No results.
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
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
                    let movieGenres = movie.Genre.split(', ');
                    let matched = true;
                    this.genre.forEach(genre => {
                        if(movieGenres.indexOf(genre) === -1) {
                            matched = false;

                        };
                    });
                    return matched;
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