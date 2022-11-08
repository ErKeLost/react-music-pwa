// import Layout from '@/layout'
import { Suspense } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Link, useRoutes } from 'react-router-dom'
import { routes } from './router'
// import { useEffect, useState } from 'react'
function App() {
  // const [banner, setBanner] = useState([])
  // useEffect(() => {
  //   axios.get('https://music-erkelost.vercel.app/banner').then((res) => {
  //     setBanner(res)
  //   })
  // }, [])
  // console.log('我被渲染了', banner)

  return (
    <div>
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的</Link>
      <Link to="/mv">Mv</Link>
      <Button variant="contained">Contained</Button>
      <br />
      {/* <Layout /> */}
      {/* {banner?.data?.banners?.map((item) => {
        return <img src={item.imageUrl} key={item.imageUrl} />
      })} */}
      <Suspense fallback="loading">
        <div className="router">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
