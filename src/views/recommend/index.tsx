import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { fetchBannerDataAction } from '~/store/modules'
import SwiperBanners from './cpns/core-swiper/swiper'
import DayRecommend from './cpns/day-recommend'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  return (
    <div>
      <SwiperBanners></SwiperBanners>
      <DayRecommend></DayRecommend>
    </div>
  )
}

export default memo(Recommend)
