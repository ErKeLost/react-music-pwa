import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper, UserInfoWrapper, SkeletonWrapper } from './style'
import { Avatar, Button, IconButton, Skeleton } from '@mui/material'
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
  const { userInfo, skeletonFlag } = useMusicSelector(
    (state: any) => ({
      userInfo: state.login.userInfo,
      skeletonFlag: state.login.skeletonFlag
    }),
    shallowEqualMusic
  )
  console.log()

  return (
    <UserWrapper>
      {nullObj(userInfo) || skeletonFlag ? (
        <div>{skeletonFlag ? <UserInfoFn /> : <SkeletonFn />}</div>
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

export function UserInfoFn(props) {
  const { userInfo, userFans } = useMusicSelector(
    (state: any) => ({
      userInfo: state.login.userInfo,
      userFans: state.login.userFans
    }),
    shallowEqualMusic
  )
  return (
    <UserInfoWrapper>
      <Avatar
        className="avatar"
        src={userInfo?.profile?.avatarUrl}
        sx={{ width: 106, height: 106 }}
      />
      <span className="nickname">{userInfo.profile.nickname}</span>
      <div className="other">
        <div>
          <span>{userFans?.followed?.follow.length}</span>
          <span>关注</span>
        </div>
        <div>
          <span>{userFans?.follow?.size}</span>
          <span>粉丝</span>
        </div>
        <div>
          <span> Lv{userInfo?.data?.level}</span>
          <span>等级</span>
        </div>
      </div>
    </UserInfoWrapper>
  )
}
export function SkeletonFn(props) {
  return (
    <SkeletonWrapper>
      <Skeleton variant="circular" width={90} height={90} />
      <Skeleton variant="rectangular" width={150} height={30} />
      <Skeleton variant="rounded" width={150} height={30} />
    </SkeletonWrapper>
  )
}

export default memo(User)
