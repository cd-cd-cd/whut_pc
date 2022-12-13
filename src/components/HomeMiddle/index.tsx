import React, { useContext, useEffect } from 'react'
import style from './index.module.scss'
import './index.css'
import MessageItem from './MessageItem'
import SortRule from './SortRule'
import { context } from '../../hooks/store'

export default function HomeMiddle () {
  const { PostList } = useContext(context)

  useEffect(() => {
    console.log(PostList)
  }, [PostList])

  return (
    <div className={style.mid}>
      <div className={style.box}>
        <SortRule></SortRule>
        {
          PostList.map((post, index) =>
            <div key={index}>
              <MessageItem post={post}></MessageItem>
            </div>
          )
        }
      </div>
    </div>
  )
}
