import { createContext } from "react"
import { IRecord } from '../libs/model'

interface StoreContext {
  // 保存帖子
  PostList: IRecord[],
  setPostList: (Record: IRecord[]) => void

  // 保存类别id
  categoryId: number,
  setCategoryId: (id: number) => void
}

const context = createContext<StoreContext>({
  PostList: [],
  setPostList: () => {},
  categoryId: -1,
  setCategoryId: () => {}
})

const StoreProvider = context.Provider
export { context, StoreProvider }
