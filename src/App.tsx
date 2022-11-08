// import Layout from '@/layout'
import { Suspense } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Link, useRoutes } from 'react-router-dom'
import { routes } from './router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from './store/modules/theme'
function App() {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    axios.get('https://music-erkelost.vercel.app/banner').then((res) => {
      return setBanner(res)
    })
  }, [])
  console.log('我被渲染了', banner)
  const dispatch = useDispatch()
  function handleTheme() {
    dispatch(changeTheme())
  }

  return (
    <div>
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的</Link>
      <Link to="/mv">Mv</Link>
      <Button onClick={handleTheme} variant="contained">
        Contained
      </Button>
      <br />
      {/* <Layout /> */}

      <Suspense fallback="loading">
        <div className="router">{useRoutes(routes)}</div>
      </Suspense>
      {banner?.data?.banners?.map((item) => {
        return <img src={item.imageUrl} key={item.imageUrl} />
      })}
    </div>
  )
}

export default App
