import { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { navs } from './config'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import Login from '../Login'

const Navbar: NextPage = () => {
  const { pathname } = useRouter()

  const [isShowLogin, setShowLogin] = useState(false)

  const handleGotoEditorPage = () => {
    
  }

  const handleClose = () => {
    setShowLogin(false)
  }

  const handleLogin = () => {
    setShowLogin(true)
  }

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => {
          return (
            <Link key={nav?.label} href={nav?.value}>
              <a className={pathname === nav?.value ? styles.active : ''}>{nav?.label}</a>
            </Link>
          )
        })}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>
          写文章
        </Button>
        <Button type="primary" onClick={handleLogin}>
           登录
        </Button>
      </section>

      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  )
}

export default Navbar
