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
        <meta name="description" content="淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！" />
        <meta name="aplus-xplug" content="NONE" />
        <meta name="keywords" content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺" />
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
