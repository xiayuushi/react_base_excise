import styles from './index.module.scss'

const XxxFooter = ({ list, checkAll }) => {
  const totalCounts = list
    .filter((item) => item.goods_state)
    .reduce((prev, item) => prev + item.goods_count, 0)

  const totalPrice = list
    .filter((item) => item.goods_state)
    .reduce((prev, item) => prev + item.goods_count * item.goods_price, 0)

  const isCheckAll = list.every((item) => item.goods_state)

  return (
    <div className={styles['xxx-footer']}>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="footerCheck"
          checked={isCheckAll}
          onChange={() => checkAll(!isCheckAll)}
        />
        <label className="custom-control-label" htmlFor="footerCheck">
          全选
        </label>
      </div>
      <div>
        <span>合计:</span>
        <span className={styles['price']}>¥ {totalPrice}</span>
      </div>
      <button
        type="button"
        className={[styles['footer-btn'], 'btn', 'btn-primary'].join(' ')}
      >
        结算 ({totalCounts})
      </button>
    </div>
  )
}

export default XxxFooter
