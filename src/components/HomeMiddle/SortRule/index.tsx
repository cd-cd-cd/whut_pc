import React, { useState, useEffect, useContext, useCallback } from 'react'
import style from './index.module.scss'
import { LatestArticles, HottestArticles } from '../../../api/article'
import { context } from '../../../hooks/store'
type rule = 'lasted' | 'hottest'
export default function SortRule () {
  const [rule, setRule] = useState<rule>('lasted')
  const { PostList, setPostList } = useContext(context)

  const getArticles = useCallback(async (type: rule) => {
    if (type === 'lasted') {
      const res = await LatestArticles()
      if (res) {
        setPostList(res.data.records)
      }
    } else if (type === 'hottest') {
      const res = await HottestArticles()
      if (res) {
        setPostList(res.data.records)
      }
    }
  }, [PostList, setPostList]
  )

  useEffect(() => {
    getArticles(rule)
  }, [rule])

  useEffect(() => {
    getArticles(rule)
  }, [])
  return (
    <div className={style.back}>
      <div
        onClick={() => { setRule('lasted') }}
        className={rule === 'lasted' ? style.click : style.normal}
      >最新</div>
      <div
        onClick={() => { setRule('hottest') }}
        className={rule === 'hottest' ? style.click : style.normal}
      >最热</div>
    </div>
  )
}
