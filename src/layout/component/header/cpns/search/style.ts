import styled from 'styled-components'
export const SearchRankingWrapper = styled.div`
  /* width: 1000px; */
  padding: 16px;
  font-size: 14px;
  .hot-1 {
    background-color: #e74c3c !important;
  }
  .hot-2 {
    background-color: #e67e22 !important;
  }
  .hot-3 {
    background-color: #f1c40f !important;
  }
  .hotList {
    display: flex;
    gap: 20px;
    .hotItem {
      padding: 6px 0;
      display: flex;
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .item {
        flex: 1;
        width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .hotItemIndex {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 2px;
        background-color: #7f7f8c;
        color: #fff;
        line-height: 20px;
        font-size: 12px;
        text-align: center;
        vertical-align: top;
      }
    }
  }
  .divider {
    margin: 12px 0;
  }
  .search {
    display: flex;
    gap: 50px;
    .left {
      display: flex;
      gap: 20px;
      flex-direction: column;
      .top {
      }
    }
    .right {
    }
  }
  .right {
    width: 350px;
    .mvList {
      max-height: 550px;
      overflow-y: scroll;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      .mvItem {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100px;
        gap: 4px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 6px;
        }
      }
    }
  }
`
