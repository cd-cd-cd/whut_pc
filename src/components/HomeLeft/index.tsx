import React, { useContext, useEffect, useState } from 'react'
import { category } from '../../api/article'
import { context } from '../../hooks/store'
import { ICategory } from '../../libs/model'
import style from './index.module.scss'

export default function HomeLeft () {
  const { categoryId, setCategoryId } = useContext(context)
  const [categoryArray, setCategoryArray] = useState<ICategory[]>()

  const getCategoryArray = async () => {
    const res = await category()
    setCategoryArray(res?.data)
  }
  useEffect(() => {
    getCategoryArray()
  }, [])

  return (
    <div className={style.left}>
      {
        categoryArray?.map((item) =>
          <div key={item.categoryId}
          className={item.categoryId === categoryId ? style.item_click : style.item}
          onClick={() => { setCategoryId(item.categoryId) }}
          >{item.categoryName}</div>
        )
      }
    </div>
  )
}
