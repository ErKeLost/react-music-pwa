import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
// import Discover from '~/views/discover'
// import Mine from '~/views/mine'
// import Mv from '~/views/mv'
const Discover = lazy(() => import('~/views/discover'))
const Mine = lazy(() => import('~/views/mine'))
const Mv = lazy(() => import('~/views/mv'))
const Recommend = lazy(() => import('~/views/recommend'))
const Ranking = lazy(() => import('~/views/ranking'))
const SongList = lazy(() => import('~/views/song-list'))
const Artist = lazy(() => import('~/views/artist'))
const Album = lazy(() => import('~/views/album'))
export const routes: RouteObject[] & any = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    title: '发现音乐',
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
        title: '推荐'
      },
      {
        path: '/discover/song-list',
        element: <SongList />,
        title: '歌单'
      },
      {
        path: '/discover/album',
        element: <Album />,
        title: '专辑'
      },
      {
        path: '/discover/artist',
        element: <Artist />,
        title: '歌手'
      }
    ]
  },
  {
    path: '/ranking',
    element: <Ranking />,
    title: '排行榜'
  },
  {
    path: '/mv',
    element: <Mv />,
    title: 'Mv排行'
  },
  {
    path: '/mine',
    element: <Mine />,
    title: '我的音乐'
  }
]
