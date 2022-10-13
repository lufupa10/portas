import styles from '../styles/Presente.module.css'

export default function Presentes() {
    return (
        <>
           <div className={styles.presentes}>
            <div className={styles.tampa}></div>
            <div className={styles.corpo}></div>
            <div className={styles.laco1}></div>
            <div className={styles.laco2}></div>
           </div>
        </>
    )
}