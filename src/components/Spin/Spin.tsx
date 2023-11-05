import styles from './styles.module.scss';

const Spin = () => {
    return(
        <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
    )
}

export default Spin;