import styled from 'styled-components'

export const DayCommendWrapper = styled.div`
  display: flex;
  gap: 60px;
  user-select: none;
  .songList {
    width: 600px;
  }
  .songs {
    width: 0px;
    flex: 1;
  }
  .MuiCardContent-root,
  .MuiBox-root {
    padding-bottom: 0;
  }
  .MuiCardContent-root {
    padding-top: 12px;
  }
  /* margin-top: 39px;
  display: flex;
  gap: 20px;
  .songList {
    display: flex;
    width: 500px;
    flex-direction: column;
    gap: 30px;
    flex-wrap: wrap;
  }

  .mySwiper {
    margin: 0;
    width: 740px;
    height: 150px;
  }
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  } */
`
