<script setup lang="ts">
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>

<template>
  <div class="w-full h-24 bg-slate-700 flex justify-between items-center pr-10">
    <div class="text-3xl h-full flex items-center pl-7 hover:cursor-pointer text-slate-200">
      MovieFinder
    </div>
    <div class="text-2xl font-bold ml-7 mt-1 text-slate-200">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
    <div class="text-2xl font-bold ml-7 mt-1 text-slate-200">
      <el-button type="success" round @click="centerDialogVisible = true">Upload Movie</el-button>
    </div>
    <ClientOnly>
      <el-dialog
        v-model="centerDialogVisible"
        title="Uploading Movie"
        width="500px"
        align-center
      >
        <CustomForm @close="centerDialogVisible = false"/>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Close</el-button>
          </div>
        </template>
      </el-dialog>
    </ClientOnly>
    
  </div>
</template>