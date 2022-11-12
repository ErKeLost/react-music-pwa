import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        {/* <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/song-list">歌单</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/album">新碟上架</Link>
        <Link to="/discover/artist">歌手</Link> */}
        <NavBar />
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
