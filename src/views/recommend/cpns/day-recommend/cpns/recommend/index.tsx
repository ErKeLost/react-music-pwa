import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendSongListWrapper } from './style'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
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
import { EffectCards } from 'swiper'
import { useTheme } from '@mui/material/styles'
interface IProps {
  children?: ReactNode
  list?: any
}

const RecommendSongList: FC<IProps> = ({ list }) => {
  const theme = useTheme()
  return (
    <RecommendSongListWrapper>
      <div>
        <h3>每日推荐歌曲</h3>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {list?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card sx={{ display: 'flex' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6">
                        {item?.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {item?.ar.map((item) => {
                          return <span key={item.name}>{item.name}</span>
                        })}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pl: 1,
                        pb: 1
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? (
                          <SkipNextIcon />
                        ) : (
                          <SkipPreviousIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon />
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? (
                          <SkipPreviousIcon />
                        ) : (
                          <SkipNextIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 141, height: 141 }}
                    image={item?.al?.picUrl}
                    alt="Live from space album cover"
                  />
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </RecommendSongListWrapper>
  )
}

export default memo(RecommendSongList)
