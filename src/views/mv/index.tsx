import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mv: FC<IProps> = () => {
  return <div>Mv</div>
}

export default memo(Mv)
