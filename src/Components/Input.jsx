import styles from './Input.module.css';

// eslint-disable-next-line react/prop-types
function Input({ placeholder, inputValue, medida, iconName }){

    return(
        <>
            <div className={styles.inputContainer}>
                <input  
                    type="number" 
                    className={styles.inputAttr} 
                    placeholder={placeholder} 
                    onChange={inputValue}
                    id='inputAttribute'
                />
                <label htmlFor="inputAttribute" className={styles.medidas}>{medida}</label>
                <i className={iconName}></i>
            </div>
        </>
    )
}

export default Input;
