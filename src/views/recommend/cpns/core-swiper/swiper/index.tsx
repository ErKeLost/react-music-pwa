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
import User from '../user'
interface IProps {
  children?: ReactNode
}

const SwiperBanners: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useMusicSelector(
    (state: any) => ({
      banners: state.recommend.banners
    }),
    shallowEqualMusic
  )
  function handleSwiperChange(item) {
    setCurrentIndex(item.realIndex)
  }
  /** 获取背景图片 */
  let bannerImage = banners?.[currentIndex]?.imageUrl
  if (bannerImage) bannerImage = `${bannerImage}?imageView&blur=40x20`
  return (
    <SwiperWrapper
      style={{
        background: `url(${bannerImage}) center center / 6000px`
      }}
    >
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
            onSlideChange={(e) => handleSwiperChange(e)}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {banners.map((item, index) => {
              return (
                <div className="banner-item" key={index}>
                  <SwiperSlide key={index} className="image">
                    <img key={index} src={item.imageUrl} />
                  </SwiperSlide>
                </div>
              )
            })}
          </Swiper>
        </SwiperWrapperLeft>
        <SwiperWrapperRight>
          <User />
        </SwiperWrapperRight>
        <SwiperWrapperControl>
          <ArrowLeft className="left" />
          <ArrowRight className="right" />
        </SwiperWrapperControl>
      </div>
    </SwiperWrapper>
  )
}

export default memo(SwiperBanners)
