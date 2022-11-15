import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper } from './style'
import { Avatar, Button, IconButton } from '@mui/material'
import HD from '@/components/Icon/hd'
import LightNing from '@/components/Icon/lightning'
import Comment from '@/components/Icon/comment'
import Time from '@/components/Icon/time'
import Login from '../../login'
import { nullObj } from '~/utils'
interface IProps {
  children?: ReactNode
}
const UserList = [
  {
    title: '免费观看高清视频',
    component: <HD />
  },
  {
    title: '多端同步播放记录',
    component: <Time />
  },
  {
    title: '发表弹幕/评论',
    component: <Comment />
  },
  {
    title: '热门番剧影视看不停',
    component: <LightNing />
  }
]
const User: FC<IProps> = () => {
  const [loginDialog, setLoginDialog] = useState(false)
  function handleClickOpen() {
    setLoginDialog(!loginDialog)
  }
  function handleClose() {
    setLoginDialog(!loginDialog)
  }
  const { userInfo } = useMusicSelector(
    (state: any) => ({
      userInfo: state.login.userInfo
    }),
    shallowEqualMusic
  )
  return (
    <UserWrapper>
      {nullObj(userInfo) ? (
        <div>
          <Avatar
            src={userInfo.profile.avatarUrl}
            sx={{ width: 106, height: 106 }}
          />
          <span>{userInfo.profile.nickname}</span>
          <div>
            <div>
              <span>{userInfo.data.level}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
          <div>
            {UserList.map((item) => {
              return (
                <div className="item" key={item.title}>
                  <IconButton>{item.component}</IconButton>
                  <div>{item.title}</div>
                </div>
              )
            })}
          </div>
          <Button variant="contained" fullWidth onClick={handleClickOpen}>
            立即登录
          </Button>
          <Login loginDialog={loginDialog} handleClose={handleClose} />
        </div>
      )}
    </UserWrapper>
  )
}

export default memo(User)
