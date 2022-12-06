import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

interface IProps {
  children?: ReactNode
}

const Spin: FC<IProps> = () => {
  return (
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: "translate(-50%, -50%)"
      }}
      sx={{ display: 'flex' }}
    >
      <CircularProgress />
    </Box>
  )
}

export default memo(Spin)
