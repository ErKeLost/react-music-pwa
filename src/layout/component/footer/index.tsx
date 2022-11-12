import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = () => {
  // return <div>Footer</div>
}

export default memo(Footer)

