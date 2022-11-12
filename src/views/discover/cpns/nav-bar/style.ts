import styled from 'styled-components'

export const NavWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.palette.primary.main};
  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;
    .item {
      a {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 1px 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 13px;
        &:hover,
        &.active {
          border-radius: 20px;
          background-color: #9b0909;
        }
      }
    }
  }
`
