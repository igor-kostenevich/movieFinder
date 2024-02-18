<script setup lang="ts">
import type { IMovie } from '../interfaces';

const props = defineProps({
  movie: {
    type: Object as () => IMovie,
    required: true
  }
})
</script>


<template>
  <div class="bg-black p-10 w-full relative text-slate-200" v-if="Object.keys(props.movie).length">
    <div class="absolute top-0 right-1/4 w-[40%] h-full">
      <img src="https://m.media-amazon.com/images/M/MV5BMTIzMDE0MDQ5Ml5BMl5BanBnXkFtZTcwNTUwMDUyMQ@@._V1_SX300.jpg" alt="Your Image" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent scale-x-[1.01]"></div>
      <div class="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent scale-x-[1.01]"></div>
    </div>
    <div class="text-5xl mb-2 pt-24 max-w-96 relative">{{ props.movie.Title }} ({{ props.movie.Year }})</div>
    <div class="flex flex-col items-start text-xl pb-24">
      <div class="pr-2 relative">Type: {{ props.movie.Type }}</div>
      <div class="relative">ID: {{ props.movie.imdbID }}</div>
    </div>
  </div>
</template>