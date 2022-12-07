import request from "../utils/request";
// 首页最新文章
export const getLatestArticles = async () => {
  return await request({
    url: '/article/new',
    method: 'GET'
  })
}
