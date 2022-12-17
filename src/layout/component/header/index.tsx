import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useMusicDispatch } from '@/store'
import { changeTheme } from '@/store/modules/theme'
import { setSearchLoading } from '~/store/modules'
import Button from '@mui/material/Button'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { routes } from '@/router'
import { Avatar, TextField } from '@mui/material'
import MdiAccount from '~/components/Icon/account'
import { nullObj } from '~/utils'
import Search from './cpns/search'
import { getSearchResultAction, getSearchValueAction } from '~/store/modules'
import { useOnClickOutside } from '@/hooks/useClickOutSide'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  const [searchWord, setSearchWord] = useState('')
  const [searchFlag, setSearchFlag] = useState(false)
  const dispatch = useMusicDispatch()
  function handleTheme() {
    dispatch(changeTheme())
  }
  const one = routes.filter((item) => item.path !== '/')
  const { userInfo, searchValue } = useMusicSelector(
    (state: any) => ({
      userInfo: state.login.userInfo,
      searchValue: state.search.searchValue
    }),
    shallowEqualMusic
  )
  const debounceFn = debounce(setSearchThrottle, 800)
  const searchRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(searchRef, (e) => {
    setSearchFlag(false)
  })
  function handleSearchWord(e: HTMLElement) {
    if (e.target.value.trim().length > 0) {
      dispatch(setSearchLoading(true))
    } else {
      dispatch(setSearchLoading(false))
    }
    const currentValue = e.target.value
    debounceFn(currentValue)
  }
  function setSearchThrottle(value: string) {
    setSearchWord(value)
  }
  function searchFocus(e: HTMLElement) {
    setSearchFlag(true)
  }
  function searchBlur(e: HTMLElement) {}
  function searchClick(e: Event) {
    // setSearchFlag(true)
  }
  useEffect(() => {
    dispatch(getSearchValueAction(searchWord))
  }, [searchWord])
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
          <Search
            searchFlag={searchFlag}
            searchWord={handleSearchWord}
            searchFocus={searchFocus}
            searchBlur={searchBlur}
            searchClick={searchClick}
            ref={searchRef}
          />
          <span className="login">
            <Avatar>
              {nullObj(userInfo) ? (
                <img
                  style={{ width: '40px', height: '40px' }}
                  src={userInfo?.profile?.avatarUrl}
                  alt=""
                  onClick={handleTheme}
                />
              ) : (
                <MdiAccount />
              )}
            </Avatar>
          </span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(Header)
function debounce(fn, delay) {
  let time = null //time用来控制事件的触发
  return function (args) {
    if (time !== null) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.call(this, args)
      //利用call(),让this的指针从指向window 转成指向input
    }, delay)
  }
}
