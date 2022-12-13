import request from "../utils/request";
import { INewRes } from '../libs/model'
// 首页最新文章
export const LatestArticles = async () => {
  return await request<INewRes>({
    url: '/article/new',
    method: 'GET'
  })
}

// 得到点赞最多十条
export const HottestArticles = async () => {
  return await request<INewRes>({
    url: '/article/hot',
    method: 'GET'
  })
}

// 查询分类列表
export const category = async () => {
  return await request({
    url: '/category/category',
    method: 'GET'
  })
}
