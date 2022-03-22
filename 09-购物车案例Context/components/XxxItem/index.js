import styles from './index.module.scss'
import XxxCount from '../XxxCount/index'

const XxxItem = (props) => {
  return (
    <div className={styles['xxx-goods-item']}>
      <div className={styles['left']}>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.id}
            checked={props.goods_state}
            onChange={() => props.changeChecked(props.id)}
          />
          <label className="custom-control-label" htmlFor={props.id}>
            <img src={props.goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className={styles['right']}>
        <div className={styles['top']}>{props.goods_name}</div>
        <div className={styles['bottom']}>
          <span className={styles['price']}>¥ {props.goods_price}</span>
          <XxxCount count={props.goods_count} id={props.id}></XxxCount>
        </div>
      </div>
    </div>
  )
}

export default XxxItem
