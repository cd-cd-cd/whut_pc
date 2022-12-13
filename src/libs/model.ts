export interface IRecord {
  articleCategoryId: number
  articleCategoryName: string
  articleCommentCount: number
  articleContent: string
  articleId: number
  articleImg: string
  articleLikeCount: number
  articleTitle: string
  articleUserId: string
  articleViewCount: number
  avatar: string
  createdTime: string
  isDeleted: number
  liked: boolean
  name: string
  updateTime: string
}

export interface INewRes {
  countId: number
  current: number
  maxLimit: number
  optimizeCountSql: boolean
  orders: []
  pages: number
  records: IRecord[]
  searchCount: boolean
  size: number
  total: number
}
