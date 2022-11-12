import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { routes } from '@/router'
import { NavLink } from 'react-router-dom'
const res = routes.filter((item) => item.children)
const navRoute = res[0].children.filter((item) => item.title)
interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {navRoute.map((item) => {
          return (
            <div className="item" key={item.path}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
