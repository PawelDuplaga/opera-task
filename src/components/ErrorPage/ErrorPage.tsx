import styles from './styles.module.scss';


const ErrorPage = () => {

  return (
		<div className={styles.errorpageContainer}>
      <h2>Oops... Something went wrong!</h2>
      <button
        className={styles.buttonRefresh}
      >
        Try refreshing the page
      </button>
		</div>
  );
};

export default ErrorPage