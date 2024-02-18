<script setup lang="ts">
import { ref } from 'vue';
import { useMoviesStore } from '../stores/movies'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

const store = useMoviesStore()
const formData = ref({
  Poster: '',
  Title: '',
  Year: '',
  Type: '',
})
const emit = defineEmits(['close'])
const uploadErrorMsg = ref('')

const submitForm = () => {
  uploadErrorMsg.value = ''

  if (!(Object.values(formData.value).includes(''))) {    
    store.createMovie(formData.value)
    emit('close')
  } else {
    uploadErrorMsg.value = 'Oops.. You have to fill all the inputs below'
  }
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  formData.value.Poster = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return
  }
  return true
}

</script>


<template>
  <div class="flex items-center justify-center max-w-96 m-auto">
    <el-form label-position="top" ref="form" :model="formData">
      <div class="gap-6">
        <el-upload
          class="avatar-uploader flex items-center justify-center py-9"
          action="#"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="formData.Poster" :src="formData.Poster" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon w-32"><Plus /></el-icon>
          <div class="ml-2">Add Poster*</div>
        </el-upload>

        <div v-if="uploadErrorMsg.length" class="text-center text-lg text-red-500 pb-5">{{ uploadErrorMsg }}</div>
        <div class="flex items-center justify-center">
          <el-form-item class="pb-0" label="Name*">
            <el-input placeholder="Name is..." class="w-50 my-2 mr-2" v-model="formData.Title" />
          </el-form-item>
          <el-form-item label="Year*">
            <el-input placeholder="Year of release..." class="w-50 my-2 mr-2" v-model="formData.Year" />
          </el-form-item>
        </div>
        <div class="flex items-center justify-center">
          <el-form-item label="Type*">
            <el-input placeholder="Series/Movie..." class="w-50 my-2 mr-2" v-model="formData.Type" />
          </el-form-item>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <el-button class="w-2/5" @click="submitForm" type="success" round>Add movie</el-button>
      </div>
    </el-form>
  </div>
</template>