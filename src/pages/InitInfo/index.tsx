import React from 'react'
import style from './index.module.scss'
import { Button, Form, Input, Radio } from 'antd'

export default function InitInfo () {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log(values);
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <div className={style.init}>
      <div className={style.nav}></div>
      <div className={style.main}>
        <div className={style.initBox}>
          <div className={style.avatar}>
            <div className={style.avatar_box}>
            </div>
          </div>
          <div className={style.info}>
            <Form
              onFinish={onFinish}
              name="initInfo"
              form={form}
              className={style.form}
            >
              <Form.Item
                name='nickName'
              >
                <Input
                placeholder='取个昵称吧'
                bordered={false}
                ></Input>
                <Form.Item>
                  <div className={style.underline}></div>
                </Form.Item>
              </Form.Item>
              <Form.Item name='sex' className={style.sex}>
                <Radio.Group defaultValue={0}
                className={style.radioGroup}
                >
                  <Radio value={0} >男</Radio>
                  <Radio value={1}>女</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <div className={style.buttons}>
                  <Button
                  htmlType="button"
                  onClick={() => onReset()}
                  className={style.button}
                  >
                  重置
                </Button>
                <Button
                type="primary"
                htmlType="submit"
                className={style.button}
                >
                  提交
                </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
