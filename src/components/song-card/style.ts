import styled from 'styled-components'

export const SongListWrapper = styled.div`
  width: 120px;
  font-size: 14px;
  img {
    width: 100%;
    height: 100%;
  }
  .song-name {
    margin-top: 10px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; //使用自适应布局
    -webkit-line-clamp: 2; //设置超出行数，要设置超出几行显示省略号就把这里改成几
    -webkit-box-orient: vertical;
  }
`
