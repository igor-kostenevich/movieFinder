<script setup lang="ts">
import { useMoviesStore } from '../../stores/movies';
import { useRoute } from 'vue-router';

const store = useMoviesStore()
const route = useRoute()

if(!Object.keys(store.currentMovie).length) {
  const id = route.params.id
  store.getMovie(id as string)
}
</script>

<template>
  <div class="bg-black p-10 w-full relative text-slate-200" v-if="store.currentMovie && Object.keys(store.currentMovie).length">
    <div class="absolute top-0 right-1/4 w-[40%] h-full">
      <img :src="store.currentMovie.Poster" alt="Your Image" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent scale-x-[1.01]"></div>
      <div class="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent scale-x-[1.01]"></div>
    </div>
    <div class="text-5xl mb-2 pt-24 max-w-96 relative">{{ store.currentMovie.Title }} ({{ store.currentMovie.Year }})</div>
    <div class="flex flex-col items-start text-xl pb-24">
      <div class="pr-2 relative">Type: {{ store.currentMovie.Type }}</div>
      <div class="relative">ID: {{ store.currentMovie.imdbID }}</div>
    </div>
  </div>
  <div class="text-3xl text-slate-200 pt-20 py-5">We Also Reccomend</div>
  <BaseMovieList isRecommendList/>
</template>