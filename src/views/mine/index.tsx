import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  )
}

export default memo(Mine)
