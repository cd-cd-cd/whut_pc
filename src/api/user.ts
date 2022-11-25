import request from "../utils/request";

interface ReGetCode {
  code: number
  data: string
  errorMsg: string
  success: boolean
}

interface ReRegister {
  code: number
  data: any
  errorMsg: string
  success: boolean
}

// 教育邮箱发送验证码
export const getCode = async (email: string) => {
  return await request<ReGetCode>({
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

// 注册用户
export const register = async (code: string, email: string, password: string) => {
  return await request<ReRegister>({
    url: '/user/create',
    method: 'POST',
    data: {
      code,
      email,
      password
    }
  })
}
