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
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import {
  fetchLoginDataAction,
  fetchQrImgAction,
  fetchPoilingQrAction
} from '@/store/modules'
import { DialogWrapper, LoginDialogWrapper } from './style'
import Divider from '@mui/material/Divider'
import { TextField } from '@mui/material'
// TODO: 登录整体二维码逻辑
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
  let interval: any = useRef(null)
  useEffect(() => {
    dispatch(fetchLoginDataAction())
    // dispatch(fetchQrImgAction())
    // return () => {}
  }, [])
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal, open } = state

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState })
  }
  const handleCloseClick = () => {
    setState({ ...state, open: false })
  }
  const { codeInfo, loginSuccess, poilingData } = useMusicSelector(
    (state: any) => ({
      codeInfo: state.login.codeInfo,
      loginSuccess: state.login.loginSuccess,
      poilingData: state.login.poilingData
    }),
    shallowEqualMusic
  )
  useEffect(() => {
    if (loginSuccess) {
      clearInterval(interval.current)
      console.log('login success 在watch effect 中执行了', loginSuccess)
      handleClick({
        vertical: 'top',
        horizontal: 'center'
      })
      handleClose()
    } else {
      checkQrStatus()
    }
  }, [loginSuccess])
  function checkQrStatus() {
    clearInterval(interval.current)
    interval.current = setInterval(async () => {
      dispatch(fetchPoilingQrAction())
    }, 2000)
  }
  function source() {
    dispatch(fetchPoilingQrAction())
  }

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
                <Button variant="contained" onClick={source} fullWidth>
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleCloseClick}
        message="登录成功"
        key={vertical + horizontal}
      />
    </DialogWrapper>
  )
}
