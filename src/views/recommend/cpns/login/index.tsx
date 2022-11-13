import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { ReactNode } from 'react'
import { fetchLoginDataAction } from '@/store/modules'
import { DialogWrapper, LoginDialogWrapper } from './style'
import Divider from '@mui/material/Divider'
import { Box, TextField } from '@mui/material'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IProps {
  children?: ReactNode
  loginDialog?: boolean
  handleClose?: any
}
export default function AlertDialogSlide(props: IProps) {
  const { loginDialog, handleClose } = props
  const dispatch = useMusicDispatch()
  useEffect(() => {
    dispatch(fetchLoginDataAction())
  }, [])
  const { codeInfo } = useMusicSelector(
    (state: any) => ({
      codeInfo: state.login.codeInfo
    }),
    shallowEqualMusic
  )
  console.log(codeInfo)
  return (
    <DialogWrapper>
      <Dialog
        open={loginDialog}
        maxWidth="md"
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <LoginDialogWrapper>
          <div className="top-container">
            <div className="left">
              <span>扫描二维码登录</span>
              <img src={codeInfo.data?.qrimg} alt="" />
              <span>扫码登录或扫码下载APP</span>
            </div>
            <Divider orientation="vertical" flexItem></Divider>
            <div className="right">
              <div className="top">
                <span>邮箱登录</span>
                <Divider orientation="vertical" flexItem></Divider>
                <span>手机登录</span>
              </div>
              <div className="content">
                <TextField
                  fullWidth
                  label="账号"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="密码"
                  variant="outlined"
                  size="small"
                />
                <Button variant="contained" fullWidth>
                  登录
                </Button>
              </div>
              <div className="way">其他登录方式</div>
              <div className="bottom">
                <div className="loginType">
                  <div className="flex">
                    <div className="weixin"></div>
                    <span>微信登录</span>
                  </div>
                  <div className="flex">
                    <div className="weibo"></div>
                    <span>微博登录</span>
                  </div>
                  <div className="flex">
                    <div className="qq"></div>
                    <span>QQ登录</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="other"></div>
        </LoginDialogWrapper>
      </Dialog>
    </DialogWrapper>
  )
}
