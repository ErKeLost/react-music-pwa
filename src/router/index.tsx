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
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/song-list',
        element: <SongList />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/mv',
    element: <Mv />
  }
]
