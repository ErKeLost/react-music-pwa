import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { MaterialSymbolsSearch } from '~/components/Icon/search'
import { SearchRankingWrapper } from './style'
import { getHotSearchListAction } from '~/store/modules'
import classNames from 'classnames'
import Spin from '@/components/loading'
import { setSearchLoading } from '~/store/modules'
interface IProps {
  children?: ReactNode
  searchWord?: () => {}
  searchFocus?: () => {}
  searchBlur?: () => {}
  searchClick?: () => {}
  searchFlag?: boolean
}

const Search: FC<IProps> = forwardRef(
  ({ searchWord, searchFocus, searchBlur, searchClick, searchFlag }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null
    )
    const dispatch = useMusicDispatch()
    const {
      hotList,
      searchLoading,
      personalizedSongList,
      searchValue,
      mvList
    } = useMusicSelector(({ search }) => {
      return {
        hotList: search.hotList,
        hotListSimple: search.hotListSimple,
        personalizedSongList: search.personalizedSongList,
        mvList: search.mvList,
        searchValue: search.searchValue,
        searchLoading: search.searchLoading
      }
    })

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const input = useRef<any>(null)
    // 获取热门搜索词
    useEffect(() => {
      dispatch(getHotSearchListAction())
    }, [])
    useEffect(() => {
      dispatch(setSearchLoading(false))
    }, [searchValue])
    return (
      <div style={{ position: 'relative' }} ref={ref}>
        <Paper
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
            onBlur={searchBlur}
            onClick={handleClick}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <MaterialSymbolsSearch />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        {searchFlag ? (
          <SearchRankingWrapper>
            <div className="search" onClick={searchClick}>
              <div className="left">
                <div className="top">
                  <h3>热搜榜</h3>
                  <Divider className="divider" />
                  <div className="hotList">
                    <div>
                      {searchValue?.songs
                        ? searchValue?.songs
                            ?.slice(0, 10)
                            .map((item, index) => {
                              return (
                                <div key={index}>
                                  {renderSearchView(item, index)}
                                </div>
                              )
                            })
                        : hotList?.slice(0, 10).map((item, index) => {
                            return (
                              <div key={index}>
                                {renderSearchView(item, index, true)}
                              </div>
                            )
                          })}
                    </div>
                    <div>
                      {searchValue?.songs
                        ? searchValue?.songs
                            ?.slice(10, 20)
                            .map((item, index) => {
                              return (
                                <div key={index}>
                                  {renderSearchView(item, index + 10)}
                                </div>
                              )
                            })
                        : hotList?.slice(10, 20).map((item, index) => {
                            return (
                              <div key={index}>
                                {renderSearchView(item, index + 10, true)}
                              </div>
                            )
                          })}
                    </div>
                    {searchLoading ? <Spin /> : null}
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
        ) : null}
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
)

function renderSearchView(
  item: { searchWord: string; name: string },
  index: number,
  flag: boolean = false
) {
  return (
    <div key={item[flag ? 'searchWord' : 'name']} className="hotItem">
      <div
        className={classNames('hotItemIndex', {
          'hot-1': index === 0,
          'hot-2': index === 1,
          'hot-3': index === 2
        })}
      >
        {index + 1}
      </div>
      <div className="item">{item[flag ? 'searchWord' : 'name']}</div>
    </div>
  )
}

export default memo(Search)
