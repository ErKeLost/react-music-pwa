import styled from 'styled-components'

export const SwiperWrapper = styled.div`
  .banner {
    height: 270px;
    position: relative;
  }
`
export const SwiperWrapperLeft = styled.div`
  position: relative;
  .banner-item {
    overflow: hidden;
    .image {
      height: 100% !important;
    }
  }
  img {
    height: 270px;
  }
`
export const SwiperWrapperRight = styled.div`
  width: 250px;
  height: 100%;
  background-color: #fba;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9;
`
export const SwiperWrapperControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 37%;
  transform: translateY(-50%);
  z-index: 10;
  .left {
    position: absolute;
    left: -85px;
  }
  .right {
    position: absolute;
    right: -85px;
  }
`

