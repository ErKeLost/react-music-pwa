import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useMusicDispatch } from '@/store'
import { changeTheme } from '@/store/modules/theme'
import Button from '@mui/material/Button'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const dispatch = useMusicDispatch()
  function handleTheme() {
    dispatch(changeTheme())
  }
  return (
    <div>
      <Link to="/discover">发现音乐</Link>
      <Link to="/mine">我的</Link>
      <Link to="/mv">Mv</Link>
      <Button onClick={handleTheme} variant="contained">
        Contained
      </Button>
    </div>
  )
}

export default memo(Header)
