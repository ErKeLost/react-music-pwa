import React, { ReactNode, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SongListCard from '@/components/song-card'

// import required modules
import { Pagination } from 'swiper'
import { SongListWrapper } from './style'
interface IProps {
  children?: ReactNode
  cardList?: []
}
function SongList(props: IProps) {
  const { cardList } = props

  return (
    <SongListWrapper>
      <h3>每日推荐歌单</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        loop={true}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {cardList?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <SongListCard key={item.id} item={item}></SongListCard>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SongListWrapper>
  )
}

export default memo(SongList)
