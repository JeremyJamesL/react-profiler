import { useState, useRef } from 'react';
import styles from './Form.module.css'
import cardStyles from './Card.module.css'

function Form(props) {
  const [count, setCount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const age = e.target[1].value;

    if(name && age >= 0) {
      // Update validity
      props.onCheckValidity({valid: false, message: 'valid'});

      // Update counter for key assignment
      setCount(count + 1);

      // Update data
      const data = {
        name: e.target[0].value,
        age: e.target[1].value,
        id: count
        }

      props.onSaveData(data);
      e.target.reset();


    } else if(name && !age >= 0) {
      // Is invalid w/ age < 0
        props.onCheckValidity({valid: true, message: 'age error'})
    } 
    
    else {
      // Is invalid w/ no data filled
      props.onCheckValidity({valid: true, message: 'no data'});
    }
  }

  return (
    <form className={`${styles.form} ${cardStyles.card}`} onSubmit={handleFormSubmit}>
        <div className={styles['form-group']}>
            <label className={styles['form-label']} htmlFor="username">Username</label>
            <input className={styles['form-text-input']} type="text" name="userame" id="username"/>
        </div>
        <div className={styles['form-group']}>
            <label className={styles['form-label']} htmlFor="age">Age (years)</label>
            <input className={styles['form-text-input']} type="number" name="age" id="age"/>
        </div>
        <div className={`${styles['form-group']} ${styles['form-group__row']}`}>
            <input className={styles.button} type="submit" value="Add user"/>
        </div> 
    </form>
  )
}
export default Form