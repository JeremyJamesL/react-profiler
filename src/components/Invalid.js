import cardStyles from "./Card.module.css";
import formStyles from "./Form.module.css";
import styles from "./Invalid.module.css";


function Invalid(props) {

  const handleOverlayClose = () => {
    props.closeOverlay({valid: false, message: 'none'});
  }
  
  return (
    <>
    <div className={styles['overlay-container']} onClick={handleOverlayClose}>
    </div>
    <div className={`${cardStyles.card} ${styles.invalid}`}>
        <div className={styles['invalid-header']}>
            <h3>Invalid input</h3>
        </div>
        <div className={styles['invalid-body']}>
            <p className={styles.para}>
                {props.errorMsg == 'age error' ? 'Please enter a valid age (> 0).' : 'Please enter a valid age and name (non-empty values).'}
            </p>
            <div className={`${formStyles['form-group']} ${formStyles['form-group__row']}`}>
            <input className={`${formStyles.button} ${styles['invalid-btn']}`} type="submit" value="Okay" onClick={handleOverlayClose}/>
        </div> 
        </div>
    </div>
    </>
  )
}
export default Invalid