import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { MaterialSymbolsSearch } from '~/components/Icon/search'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
interface IProps {
  children?: ReactNode
  searchWord?: () => {}
  searchFocus?: () => {}
}

const Search: FC<IProps> = ({ searchWord, searchFocus }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400
        }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="音乐/视频/电台/用户"
          inputProps={{ 'aria-label': '音乐/视频/电台/用户' }}
          onChange={searchWord}
          onFocus={searchFocus}
          onClick={handleClick}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <MaterialSymbolsSearch />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          {/* <DirectionsIcon /> */}
        </IconButton>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}

export default memo(Search)
