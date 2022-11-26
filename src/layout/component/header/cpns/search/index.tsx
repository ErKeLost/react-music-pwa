import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { MaterialSymbolsSearch } from '~/components/Icon/search'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import Button from '@mui/material/Button'
import { SearchRankingWrapper } from './style'
import { getHotSearchListAction, getSearchResultAction } from '~/store/modules'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
  searchWord?: () => {}
  searchFocus?: () => {}
}

const Search: FC<IProps> = ({ searchWord, searchFocus }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const dispatch = useMusicDispatch()
  const { hotList, hotListSimple, personalizedSongList, mvList } =
    useMusicSelector(({ search }) => {
      return {
        hotList: search.hotList,
        hotListSimple: search.hotListSimple,
        personalizedSongList: search.personalizedSongList,
        mvList: search.mvList
      }
    })

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const input = useRef<any>(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  useEffect(() => {
    setTimeout(() => {
      console.log(input.current!.querySelector('input'))
      input.current!.querySelector('input').focus()
    }, 1000)
  }, [anchorEl])
  // 获取热门搜索词
  useEffect(() => {
    dispatch(getHotSearchListAction())
  }, [])
  return (
    // <PopupState variant="popover" popupId="demo-popup-popover">
    //   {(popupState) => (
    <div>
      <Paper
        // {...bindTrigger(popupState)}
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="音乐/视频/电台/用户"
          inputProps={{ 'aria-label': '音乐/视频/电台/用户' }}
          onChange={searchWord}
          ref={input}
          onFocus={searchFocus}
          onClick={handleClick}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <MaterialSymbolsSearch />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      <SearchRankingWrapper>
        {/* <Typography className="searchRanking" sx={{ p: 2 }}> */}
        <div className="search">
          <div className="left">
            <div className="top">
              <h3>热搜榜</h3>
              <Divider className="divider" />
              <div className="hotList">
                <div>
                  {hotList?.slice(0, 10).map((item, index) => {
                    return (
                      <div key={item.searchWord} className="hotItem">
                        <div
                          className={classNames('hotItemIndex', {
                            'hot-1': index === 0,
                            'hot-2': index === 1,
                            'hot-3': index === 2
                          })}
                        >
                          {index + 1}
                        </div>
                        <div className="item">{item.searchWord}</div>
                      </div>
                    )
                  })}
                </div>
                <div>
                  {hotList?.slice(10, 20).map((item, index) => {
                    return (
                      <div key={item.searchWord} className="hotItem">
                        <div className="hotItemIndex">{index + 11}</div>
                        <div className="item">{item.searchWord}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="bottom">
              <h3>新歌在线</h3>
              <Divider className="divider" />
              <div className="hotList">
                <div>
                  {personalizedSongList
                    ?.slice(0, personalizedSongList.length / 2)
                    .map((item, index) => {
                      return (
                        <div key={item.id} className="hotItem">
                          <div
                            className={classNames('hotItemIndex', {
                              'hot-1': index === 0,
                              'hot-2': index === 1,
                              'hot-3': index === 2
                            })}
                          >
                            {index + 1}
                          </div>
                          <div className="item">{item.name}</div>
                        </div>
                      )
                    })}
                </div>
                <div>
                  {personalizedSongList
                    ?.slice(
                      personalizedSongList.length / 2,
                      personalizedSongList.length
                    )
                    .map((item, index) => {
                      return (
                        <div key={item.id} className="hotItem">
                          <div className="hotItemIndex">{index + 3}</div>
                          <div className="item">{item.name}</div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>最新Mv</h3>
            <Divider className="divider" />
            <div className="mvList">
              {mvList?.slice(0, 12).map((item, index) => {
                return (
                  <div key={item.id} className="mvItem">
                    <img src={item.cover} alt="" />
                    <div>{item.name}</div>
                    <div>{item.artistName}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* </Typography> */}
      </SearchRankingWrapper>
      {/* <Popover
        // {...bindPopover(popupState)}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      ></Popover> */}
    </div>
    // )}
    // </PopupState>
  )
}

export default memo(Search)
