import Head from 'next/head'
import Image from 'next/image'
// import Title from 'next/'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '烟熏三文鱼'
export const siteTitle = '烟熏三文鱼 Sample Website'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="baidu-site-verification" content="code-eCwPy2weaK" />
        <meta name="description" content="烟熏三文鱼，安静的文档存储位置" />
        <meta name="aplus-xplug" content="NONE" />
        <meta name="keywords" content="博客,烟熏三文鱼,文档,前端,开发,甘特图" />
        <meta name="og:title" property="og:title" content="Your Awesome Open Graph Title" />
        <title>烟熏三文鱼的网站Title</title>
      </Head>
      <header className={styles.header}>
        <img src="https://gw.alicdn.com/tfs/TB1DP0yAoY1gK0jSZFMXXaWcVXa-1190-70.png" alt="淘小铺" style={{
          width: '1190px',
          height: '70px'
        }} />
      </header>
      <h1 style={{ display: 'none' }}>大标题</h1>
      <h2 style={{ display: 'none' }}>大标题</h2>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
