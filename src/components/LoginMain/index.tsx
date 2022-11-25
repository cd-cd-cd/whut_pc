import React, { useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { getCode, testButton } from '../../api/user'
import style from './index.module.scss'

export default function LoginMain () {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  const [email, setEmail] = useState('')

  const getCodeClick = async () => {
    if (email.length === 0) {
      message.info('邮箱不为空')
    } else if (email.length !== 18 || email.slice(6) !== '@whut.edu.cn') {
      message.info('邮箱格式不正确')
    } else {
      const res = await getCode(email)
      console.log(res, res?.stat)
      // message.success('验证码已发送，请稍后')
      // console.log('success')
    }
  }

  const test = async () => {
    const res = await testButton()
    console.log(res)
  }

  return (
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.title}>武理论坛</div>
        <div className={style.intro}>武理人用的pc版表白墙，欢迎大家发表话题。后续会上架家教模块，二手市场模块，相亲模块等......敬请期待</div>
      </div>
      <div className={style.right}>
        <div className={style.login_box}>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={style.form}
          >
            <Form.Item
              name='email'
              rules={[
                { required: true, message: '请输入教育邮箱' }]}
            >
              <Input placeholder='教育邮箱' className={style.input} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Item>
            <Form.Item
              name='code'
              rules={[
                { required: true, message: '请输入验证码' }
              ]}
            >
              <Input placeholder='验证码' className={style.input_code} />
              <Button type='primary' className={style.getCode} onClick={() => getCodeClick()}>点击获取验证码</Button>
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: '请输入密码' },
                { min: 6, max: 16, message: '密码长度为6-16位' }
              ]}>
              <Input.Password
                placeholder='密码'
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className={style.input}
              ></Input.Password>
            </Form.Item>
            <Form.Item
              name='re_password'
              rules={[
                { required: true, message: '请输入密码' },
                { min: 6, max: 16, message: '密码长度为6-16位' }
              ]}>
              <Input.Password
                placeholder='确认密码'
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className={style.input}
              ></Input.Password>
            </Form.Item>
            <Form.Item
            >
              <div className={style.span}>已经注册，账号登录</div>
              <Button htmlType="submit" type='primary' className={style.button}>注册</Button>
            </Form.Item>
          </Form>
          <button onClick={() => test()}>test</button>
        </div>
      </div>
    </div>
  )
}
