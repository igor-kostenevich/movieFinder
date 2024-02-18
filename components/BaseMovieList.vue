<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useMoviesStore } from '../stores/movies';
import { useRouter } from 'vue-router';
import type { IMovie } from '../interfaces';

const props = defineProps({
  isRecommendList: {
    type: Boolean,
  }
})

const router = useRouter()
const store = useMoviesStore()

store.getMovies()

const movieMove = (movie: IMovie) => {
  store.currentMovie = movie
  router.push(`/results/${movie.imdbID}`)
}

const groupedItems = computed(() => {
  const result: IMovie[][] = []
  const chunkSize = 3

  const sliceArrayIntoChunks = (array: IMovie[]) => {
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
  }

  if (props.isRecommendList) {
    sliceArrayIntoChunks(store.recommendedMovies)
  } else {
    if (store.movies && 'Search' in store.movies && Array.isArray(store.movies.Search)) {
      sliceArrayIntoChunks(store.movies.Search)
    } 
    if (Array.isArray(store.movies)) {
      sliceArrayIntoChunks(store.movies)
    } 
  }

  return result;
})
</script>

<template>
  <div class="container mx-auto h-full">
    <el-carousel v-if="groupedItems.length" height="600px">
      <el-carousel-item class="w-1/3" v-for="(movies, index) in groupedItems" :key="index">
        <div class="flex items-top justify-center overflow-x-auto text-slate-200 gap-4 pb-3">
          <div 
            v-for="movie in movies" 
            :key="movie.Title" 
            class="text-xs min-w-60 w-1/4 hover:cursor-pointer rounded-b-xl bg-slate-700 border-2 hover:border-sky-300 border-transparent transition-all"
            @click="movieMove(movie)"
            >
            <div class="w-full bg-gray-600 relative pb-96">
              <img :src="movie.Poster" alt="" class="absolute inset-0 object-cover w-full h-full">
            </div>
            <div class="text-3xl font-medium my-3 px-3">
              {{ movie.Title }} ({{ movie.Year }})
            </div>
            <div class="text-xl px-3">
              <span class="font-medium">Type:</span> {{ movie.Type }}
            </div>
            <div class="text-xs px-3 pb-4">
              id: ~{{ movie.imdbID }}~
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>