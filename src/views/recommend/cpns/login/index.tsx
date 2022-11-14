import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import Avatar from '@mui/material/Avatar'
import { TransitionProps } from '@mui/material/transitions'
import { ReactNode } from 'react'
import {
  fetchLoginDataAction,
  fetchQrImgAction,
  fetchPoilingQrAction,
  setQrPoilingInfo
} from '@/store/modules'
import { DialogWrapper, LoginDialogWrapper } from './style'
import Divider from '@mui/material/Divider'
import { TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
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
  const { codeInfo, loginSuccess, poilingData, poilingInfo } = useMusicSelector(
    (state: any) => ({
      codeInfo: state.login.codeInfo,
      loginSuccess: state.login.loginSuccess,
      poilingData: state.login.poilingData,
      poilingInfo: state.login.poilingInfo
    }),
    shallowEqualMusic
  )
  useEffect(() => {
    if (loginSuccess) {
      clearInterval(interval.current)
      console.log('login success 在watch effect 中执行了', loginSuccess)
      handleClose()
    }
  }, [loginSuccess])
  useEffect(() => {
    if (loginDialog) {
      checkQrStatus()
    } else {
      clearInterval(interval.current)
      console.log('关闭dialog了啊')
      dispatch(setQrPoilingInfo('扫码登录或扫码下载APP'))
    }
  }, [loginDialog])
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
              <div className="code">
                <img src={codeInfo.data?.qrimg} alt="" />
                {poilingData.avatarUrl ? (
                  <div className="codeDrop">
                    <Avatar
                      className="avatar"
                      src={poilingData.avatarUrl}
                      sx={{ width: 86, height: 86 }}
                    />
                    <CircularProgress
                      size={100}
                      sx={{
                        position: 'absolute',
                        top: 40,
                        left: 40,
                        zIndex: 1
                      }}
                    />
                  </div>
                ) : null}
              </div>
              <span>{poilingInfo}</span>
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
    </DialogWrapper>
  )
}
