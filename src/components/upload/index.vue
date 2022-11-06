<template>
  <n-upload multiple directory-dnd :custom-request="customRequest">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <Twitter />
        </n-icon>
      </div>
      <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>
  <img :src="file.secure_url" alt="" />
</template>

<script setup lang="ts">
import { request } from '~/services'
const file = ref<any>('')
const fileList = ref([])
function upload(data) {
  return request.post({
    url: '/users/upload',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
async function customRequest(data: any) {
  console.log(data)
  const formdata = new FormData()
  formdata.append('file', data.file.file)
  const res = await upload(formdata)
  file.value = res
  // fileList.value = []
}
</script>
