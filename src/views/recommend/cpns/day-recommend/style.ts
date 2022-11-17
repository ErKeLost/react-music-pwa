import styled from 'styled-components'

export const DayCommendWrapper = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .songList {
    display: flex;
    width: 729px;
    gap: 30px;
    flex-wrap: wrap;
  }
  .MuiCardContent-root,
  .MuiBox-root {
    padding-bottom: 0;
  }
  .MuiCardContent-root {
    padding-top: 12px;
  }
  .swiper {
    margin: 0;
    width: 340px;
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
  }
`
