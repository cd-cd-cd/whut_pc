import React from 'react'
import style from './index.module.scss'
import LoginBottom from '../../components/LoginBottom'
import LoginMain from '../../components/LoginMain'
import LoginHeader from '../../components/LoginHeader'

export default function Login () {
  return (
    <div className={style.body}>
      <LoginHeader></LoginHeader>
      <LoginMain></LoginMain>
      <LoginBottom></LoginBottom>
    </div>
  )
}
