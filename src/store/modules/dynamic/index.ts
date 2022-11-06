import { getReleaseDynamic, getAllDynamic } from '@/services/modules'
export const useDynamicStore = defineStore(
  'dynamic-store',
  () => {
    // 发布动态
    async function releaseDynamic(data) {
      const res = await getReleaseDynamic(data)
      console.log(res)
    }

    // 获取全部动态
    const dynamicList = ref([])
    async function getAllDynamicList() {
      const res = await getAllDynamic()
      dynamicList.value = res
    }
    return {
      releaseDynamic,
      dynamicList,
      getAllDynamicList
    }
  },
  {
    persist: {
      // enabled: true
    }
  }
)
