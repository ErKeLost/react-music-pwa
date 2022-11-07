// import Layout from '@/layout'
import axios from 'axios'
import Button from '@mui/material/Button'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'
// import { useEffect, useState } from 'react'
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
      <Button variant="contained">Contained</Button>
      <br/>
      {/* <Layout /> */}
      {banner?.data?.banners?.map((item) => {
        return <img src={item.imageUrl} key={item.imageUrl} />
      })}
      <div className='router'>{useRoutes(routes)}</div>
    </div>
  )
}

export default App
