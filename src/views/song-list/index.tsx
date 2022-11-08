import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SongList: FC<IProps> = () => {
  return <div>SongList</div>
}

export default memo(SongList)
