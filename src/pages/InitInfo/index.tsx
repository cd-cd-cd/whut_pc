import React, { useState } from 'react'
import style from './index.module.scss'
import './index.css'
import { Button, Form, Input, Radio, Upload, message } from 'antd'
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

export default function InitInfo () {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log(values);
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
    </div>
  )

  // 检查图片格式和大小
  const beforeUpload = (file: RcFile) => {
    const isPNG = file.type === 'image/png' || file.type === 'image/jpeg'
    if (!isPNG) {
      message.error(`${file.name} 不是一个png或jpeg格式的文件`)
    }
    console.log(file.size / 1024 / 1024)
    const isLt1M = file.size / 1024 / 1024 < 1
    if (!isLt1M) {
      message.error('图片要小于1MB!')
    }
    return isPNG && isLt1M
  }

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
    }
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
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                onChange={handleChange}
                customRequest={(option) => {
                  const before = beforeUpload(option.file as RcFile)
                  if (before) {
                    const reader = new FileReader()
                    reader.readAsDataURL(option.file as RcFile)
                    reader.onloadend = function (e) {
                      setImageUrl(e.target!.result as string)
                      setLoading(false)
                    }
                  } else {
                    setLoading(false)
                  }
                }}
              >
                <div className={style.setImg} >{imageUrl ? <img src={imageUrl} style={{ width: "100px" }}/> : uploadButton}</div>
              </Upload>
            </div>
          </div>
          <div className={style.info}>
            <Form
              onFinish={onFinish}
              name="initInfo"
              form={form}
              className={style.form}
            >
              <Form.Item>
                <Form.Item name='nickName'>
                  <Input placeholder='取个昵称吧' bordered={false}></Input>
                </Form.Item>
                <div className={style.underline}></div>
              </Form.Item>
              <Form.Item name='sex' className={style.sex}>
                <Radio.Group
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
