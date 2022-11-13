import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper } from './style'
import { Button, IconButton } from '@mui/material'
import HD from '@/components/Icon/hd'
import LightNing from '@/components/Icon/lightning'
import Comment from '@/components/Icon/comment'
import Time from '@/components/Icon/time'
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
  return (
    <UserWrapper>
      <div>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div>
        {UserList.map((item) => {
          return (
            <div className='item' key={item.title}>
              <IconButton>{item.component}</IconButton>
              <div>{item.title}</div>
            </div>
          )
        })}
      </div>
      <Button variant="contained" fullWidth>
        立即登录
      </Button>
    </UserWrapper>
  )
}

export default memo(User)