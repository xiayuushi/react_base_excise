import styles from './index.module.scss'

const XxxHeader = ({ children = '标题' }) => {
  return <div className={styles['xxx-header']}>{children}</div>
}

export default XxxHeader
