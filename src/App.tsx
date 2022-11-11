import axios from 'axios'
import { useEffect, useState } from 'react'
import Layout from '@/layout'

function App() {
  // const [banner, setBanner] = useState<any[]>([])
  // useEffect(() => {
  //   axios.get('https://music-erkelost.vercel.app/banner').then((res: any) => {
  //     return setBanner(res)
  //   })
  // }, [])
  return (
    <div>
      <Layout />
      {/* {banner?.data?.banners?.map((item: any) => {
        return <img src={item.imageUrl} key={item.imageUrl} />
      })} */}
    </div>
  )
}

export default App
