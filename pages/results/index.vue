<script setup lang="ts">
import { useMoviesStore } from '../../stores/movies';

const store = useMoviesStore()

</script>

<template>
  <div>
    <BaseMovie :movie="[store.currentMovie]" />
    <div class="text-3xl text-slate-200 py-5">We Also Reccomend</div>
    <BaseMovieList />
  </div>
</template>