import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@/components/Icon/skip-previous-icon'
import PlayArrowIcon from '@/components/Icon/play-arrow-icon'
import SkipNextIcon from '@/components/Icon/skip-next-icon'
import SongListCard from '@/components/song-card'
import { DayCommendWrapper } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import {
  fetchRecommendSongsDataAction,
  fetchRecommendSongListDataAction
} from '@/store/modules/recommend'

// import required modules
import { EffectCards } from 'swiper'
import SongList from './cpns/song-list'
import Recommend from './cpns/recommend'
interface IProps {
  children?: ReactNode
}

const DayRecommend: FC<IProps> = () => {
  const theme = useTheme()
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchRecommendSongsDataAction())
    dispatch(fetchRecommendSongListDataAction())
  }, [])
  const { recommendSongs, recommendSongList } = useMusicSelector((state) => {
    return {
      recommendSongs: state.recommend.recommendSongs,
      recommendSongList: state.recommend.recommendSongList
    }
  })
  console.log(recommendSongs)

  return (
    <DayCommendWrapper className="wrap-v2 flex">
      <div className="songList">
        <h3>热门推荐</h3>
        <SongList cardList={recommendSongList}></SongList>
      </div>
      <div className="songs">
        <Recommend list={recommendSongs?.dailySongs}></Recommend>
      </div>
    </DayCommendWrapper>
  )
}

export default memo(DayRecommend)
