<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMoviesStore } from '../stores/movies'
import { useHelpers } from '../composables/useHelpers'

const store = useMoviesStore()

const search = ref('')

const { debounce } = useHelpers()
const debouncedSearch = debounce(text => store.getMovies(text || undefined))
watch(search, text => {
  debouncedSearch(text)
})
</script>

<template>
  <div>
    <BaseSearch 
      label="Looking for something?)"
      placeholder="Find a movie..." 
      v-model="search"
      class="py-20"
    />

    <BaseMovieList class="pb-20" />

    <div class="text-4xl text-slate-200 mb-9 text-center">
      We Reccomend
    </div>
    <BaseMovieList isRecommendList />
  </div>
</template>