import React, { useState } from 'react'
import style from './index.module.scss'
import dayjs from 'dayjs'
import { Tag } from 'antd'
import eyeIcon from '../../../assets/eye_gray.png'
import eyeHover from '../../../assets/eye_orange.png'
import heartIcon from '../../../assets/heart_gray.png'
import heartHover from '../../../assets/heart_orange.png'
import commentIcon from '../../../assets/comment_gray.png'
import commentHover from '../../../assets/comment_orange.png'
import { IRecord } from '../../../libs/model'

interface Props {
  post: IRecord
}
export default function MessageItem ({ post }: Props) {
  const [eye, setEye] = useState(false)
  const [heart, setHeart] = useState(false)
  const [comment, setComment] = useState(false)

  return (
    <div className={style.itemBox}>
      <div className={style.itemHeader}>
        <div className={style.avatarBox}>
          <img className={style.avatarImg} src={post.avatar}></img>
        </div>
        <div className={style.info}>
          <div className={style.nickName}>
            <div>{post.name}</div>
            {post.articleCategoryName
              ? <Tag color="#eb7340" className={style.tag}>{post.articleCategoryName}</Tag>
              : null
            }
          </div>
          <div className={style.time}>
            {dayjs(post.createdTime).format('YYYY-MM-DD HH:mm:ss')}
          </div>
        </div>
      </div>
      <div className={style.detailText}>
        <div className={style.title}>{post.articleTitle}</div>
        <div className={style.content}>{post.articleContent}</div>
      </div>
      <div className={style.imgBox}>
        <div className={style.imgs}>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
          <img className={style.img} src='http://qiniu.yangxiaobai.top/2022/12/07/sadwedwqdqwdd'></img>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.iconBox}>
          <img
            onMouseOver={() => { setEye(true) }}
            onMouseOut={() => { setEye(false) }}
            src={eye ? eyeHover : eyeIcon}
            className={style.icon}></img>
          <p className={eye ? style.hover : style.normal}>{post.articleViewCount}</p>
        </div>
        <div className={style.iconBox}>
          <img
            onMouseOver={() => { setComment(true) }}
            onMouseOut={() => { setComment(false) }}
            src={comment ? commentHover : commentIcon}
            className={style.icon}></img>
          <p className={comment ? style.hover : style.normal}>{post.articleCommentCount}</p>
        </div>
        <div className={style.iconBox}>
          <img
            onMouseOver={() => { setHeart(true) }}
            onMouseOut={() => { setHeart(false) }}
            src={heart ? heartHover : heartIcon}
            className={style.icon}></img>
          <p className={heart ? style.hover : style.normal}>{post.articleLikeCount}</p>
        </div>
      </div>
    </div>
  )
}
