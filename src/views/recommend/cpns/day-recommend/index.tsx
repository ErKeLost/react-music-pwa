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
import { DayCommendWrapper } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'
interface IProps {
  children?: ReactNode
}

const DayRecommend: FC<IProps> = () => {
  const theme = useTheme()
  return (
    <DayCommendWrapper className="wrap-v2 flex">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <SwiperSlide key={item}>
              <Card sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                      Live From Space
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
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
                  image="http://p2.music.126.net/3RANMlMM-udSsHyInyVbrQ==/528865105234307.jpg?param=140y140"
                  alt="Live from space album cover"
                />
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </DayCommendWrapper>
  )
}

export default memo(DayRecommend)
