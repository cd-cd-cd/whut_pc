import request from "../utils/request";

// 教育邮箱发送验证码
export const getCode = async (email: string) => {
  return await request({
    url: '/user/sentCode',
    method: 'POST',
    params: {
      email
    }
  })
}

export const testButton = async () => {
  return await request({
    url: '/article/new',
    method: 'GET'
  })
}
