import { Button, Input, Modal, Select, Upload, UploadFile } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { RcFile, UploadProps } from 'antd/es/upload'
import React, { useState } from 'react'
import style from './index.module.scss'
// import { category } from '../../../api/article'

export default function PublicArticle () {
  const [putVisible, setPutVisible] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ])

  //  // 检查图片格式和大小
  //   const beforeUpload = (file: RcFile) => {
  //     const isPNG = file.type === 'image/png' || file.type === 'image/jpeg'
  //     if (!isPNG) {
  //       message.error(`${file.name} 不是一个png或jpeg格式的文件`)
  //     }
  //     const isLt1M = file.size / 1024 / 1024 < 1
  //     if (!isLt1M) {
  //       message.error('图片要小于1MB!')
  //     }
  //     return isPNG && isLt1M
  //   }

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  }

  const onSearch = (value: string) => {
    console.log('search:', value);
  }
  // const getCategory = async () => {
  //   const res = await category()
  //   console.log(res)
  // }
  // useEffect(() => {
  //   getCategory()
  // }, [])
  const res = ['0', '2', '4', '5', '8']
  return (
    <div className={style.back}>
      {
        !putVisible ? <div className={style.infoInit} onClick={() => { setPutVisible(true) }}>发布一条信息吧</div>
          : <div>
            <div className={style.info}>信息发布</div>
            <div className={style.select}>
              <div className={style.catagoryTtitle}>类别</div>
              <Select
                showSearch
                placeholder="选择发布类别"
                onChange={onChange}
                onSearch={onSearch}
                options={res.map((item) => ({ value: item, label: item }))}
              />
            </div>
            <div className={style.title}>
              <div className={style.need}>*</div>
              <div className={style.titleText}>标题</div>
              <Input className={style.titleInput} placeholder='4-20个汉字'></Input>
            </div>
            <div className={style.content}>
              <Input.TextArea placeholder='详细描述你想发布的内容'></Input.TextArea>
            </div>
            <div className={style.putImgs}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
            <div className={style.buttoms}>
              <Button onClick={() => { setPutVisible(false) }} className={style.btn}>返回</Button>
              <Button className={style.btn}>确认发布</Button>
            </div>
          </div>
      }
    </div>
  )
}
