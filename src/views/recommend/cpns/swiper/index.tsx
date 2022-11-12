import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  SwiperWrapper,
  SwiperWrapperControl,
  SwiperWrapperLeft,
  SwiperWrapperRight
} from './style'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ArrowLeft from '~/components/Icon/arrow-left'
import ArrowRight from '~/components/Icon/arrow-right'
import { Autoplay, Navigation } from 'swiper'
interface IProps {
  children?: ReactNode
}

const SwiperBanners: FC<IProps> = () => {
  const { banners } = useMusicSelector(
    (state: any) => ({
      banners: state.recommend.banners
    }),
    shallowEqualMusic
  )
  return (
    <SwiperWrapper>
      <div className="banner wrap-v2">
        <SwiperWrapperLeft>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.right',
              prevEl: '.left'
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={item.encodeId}>
                  <SwiperSlide key={item.encodeId} className="image">
                    <img key={item.encodeId} src={item.imageUrl} />
                  </SwiperSlide>
                </div>
              )
            })}
          </Swiper>
        </SwiperWrapperLeft>
        <SwiperWrapperRight />
        <SwiperWrapperControl>
          <ArrowLeft className="left" />
          <ArrowRight className="right" />
        </SwiperWrapperControl>
      </div>
    </SwiperWrapper>
  )
}

export default memo(SwiperBanners)
