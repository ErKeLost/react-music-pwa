import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'

interface IProps {
  children?: ReactNode
  item?: any
}

const SongListCard: FC<IProps> = (props) => {
  const { item } = props
  return <SongListWrapper>
    <div>
    <img src={item?.picUrl} alt="" />
    </div>
  </SongListWrapper>
}

export default memo(SongListCard)
