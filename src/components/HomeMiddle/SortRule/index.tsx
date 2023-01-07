import React, { useState, useEffect, useContext, useCallback } from 'react'
import style from './index.module.scss'
import { LatestArticles, HottestArticles, getCategoryArray } from '../../../api/article'
import { context } from '../../../hooks/store'
type rule = 'lasted' | 'hottest'
export default function SortRule () {
  const [rule, setRule] = useState<rule>('lasted')
  const { PostList, setPostList, categoryId, setCategoryId } = useContext(context)

  const getArticles = useCallback(async (type: rule) => {
    console.log(categoryId)
    if (categoryId >= 0) {
      const res = await getCategoryArray(categoryId)
      if (res) {
        console.log(res.data)
      }
    } else {
      setCategoryId(-1)
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
    }
  }, [PostList, setPostList, categoryId]
  )

  useEffect(() => {
    getArticles(rule)
  }, [rule, categoryId])

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
