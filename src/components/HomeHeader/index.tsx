import { Popover } from 'antd'
import React from 'react'
import style from './index.module.scss'

export default function HomeHeader () {
  const content = (
    <div className={style.avatarContent}>
      <div>个人中心</div>
      <div>退出</div>
    </div>
  )
  return (
    <div className={style.header}>
      <Popover placement="bottomRight" content={content} trigger="hover">
        <div className={style.avatarBox}></div>
      </Popover>
    </div>
  )
}
