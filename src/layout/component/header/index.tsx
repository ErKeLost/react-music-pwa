import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMusicDispatch } from '@/store'
import { changeTheme } from '@/store/modules/theme'
import Button from '@mui/material/Button'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { routes } from '@/router'
import { Avatar, TextField } from '@mui/material'
import MdiAccount from '~/components/Icon/account'
import { nullObj } from '~/utils'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  function handleTheme() {
    dispatch(changeTheme())
  }
  const one = routes.filter((item) => item.path !== '/')
  const { userInfo } = useMusicSelector(
    (state: any) => ({
      userInfo: state.login.userInfo
    }),
    shallowEqualMusic
  )
  console.log('有一次刷新了 头像')

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {routes
              .filter((route: { title: any }) => route.title)
              .map(({ path, title }) => (
                <div className="item" key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => {
                      return isActive ? 'active' : undefined
                    }}
                  >
                    {title}
                    <i className="icon sprite_01"></i>
                  </NavLink>
                </div>
              ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <TextField
              className="search"
              id="outlined-basic"
              label="音乐/视频/电台/用户"
              variant="outlined"
              focused
              size="small"
            />
          </div>
          <span className="login">
            <Avatar>
              {nullObj(userInfo) ? (
                <img
                  style={{ width: '40px', height: '40px' }}
                  src={userInfo.profile.avatarUrl}
                  alt=""
                />
              ) : (
                <MdiAccount />
              )}
            </Avatar>
          </span>
        </HeaderRight>
      </div>

      <div className="divider"></div>
      {/* <Button onClick={handleTheme} variant="contained">
        Contained
      </Button> */}
    </HeaderWrapper>
  )
}

export default memo(Header)
