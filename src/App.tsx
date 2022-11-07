// import Layout from '@/layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    axios.get('https://music-erkelost.vercel.app/banner').then((res) => {
      setBanner(res)
    })
  }, [])
  console.log('我被渲染了', banner)

  return (
    <div>
      <div>123123132</div>
      {/* <Layout /> */}
      {banner?.data?.banners?.map((item) => {
        return <img src={item.imageUrl} key={item.imageUrl} />
      })}
    </div>
  )
}

export default App
