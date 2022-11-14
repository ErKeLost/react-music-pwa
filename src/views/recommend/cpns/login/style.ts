import styled from 'styled-components'

export const LoginDialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 52px 65px 29px 92px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/22_open.72c00877.png),
    url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/33_open.43a09438.png);
  background-position: 0 100%, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  background-size: 14%;
  position: relative;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .code {
    position: relative;
    .codeDrop {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #00000040;
      .avatar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .other {
    height: 30px;
    width: 100%;
  }
  .top-container {
    display: flex;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
      gap: 25px;
    }
    .right {
      flex: 1;
      width: 400px;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        justify-content: center;
      }
      .content {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .way {
        margin: 25px 0;
        text-align: center;
      }
      .bottom {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        .loginType {
          display: flex;
          justify-content: center;
          gap: 20px;
          cursor: pointer;
          .flex {
            display: flex;
            align-items: center;
          }
          .weixin {
            display: inline-block;
            content: '';
            width: 28px;
            height: 28px;
            margin-right: 8px;
            background: url(data:image/png;base64,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)
              no-repeat;
            background-size: cover;
          }
          .weibo {
            display: inline-block;
            content: '';
            width: 28px;
            height: 28px;
            margin-right: 8px;
            background: url(data:image/png;base64,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)
              no-repeat;
            background-size: cover;
          }
          .qq {
            display: inline-block;
            content: '';
            width: 28px;
            height: 28px;
            margin-right: 8px;
            background: url(data:image/png;base64,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)
              no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
`
export const DialogWrapper = styled.div`
  .MuiDialogContent-root {
    padding: 0 !important;
  }
  .dialog {
    padding: 0 !important;
  }
`
