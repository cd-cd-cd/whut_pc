import { createContext } from "react"
import { IRecord } from '../libs/model'

interface StoreContext {
  // 保存帖子
  PostList: IRecord[],
  setPostList: (Record: IRecord[]) => void
}

const context = createContext<StoreContext>({
  PostList: [],
  setPostList: () => {}
})

const StoreProvider = context.Provider
export { context, StoreProvider }
