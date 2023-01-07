import request from "../utils/request";
import { INewRes, ICategory } from '../libs/model'
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
  return await request<ICategory[]>({
    url: '/category',
    method: 'GET'
  })
}

// 通过id查询分类
export const getCategoryArray = async (id: number) => {
  return await request({
    url: `/category/${id}`,
    method: 'GET'
  })
}
