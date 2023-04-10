import styles from "./Results.module.css"
import cardStyles from "./Card.module.css";

function Results(props) {

  const renderResults = (el) => {
    return (
        <li className={styles.result} id={el.id} key={el.id}>
            {el.name} ({el.age} years old)
        </li>
    )
  }

  return (
    <>
    {props.data.length > 0 &&
    <div className={`${styles.results} ${cardStyles.card}`} >
        <ul className={styles['results-list']}>
            {props.data.map(el => renderResults(el))}
        </ul>
    </div>
    }
    </>
  )
}
export default Results