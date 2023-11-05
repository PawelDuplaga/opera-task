import styles from './styles.module.scss';

type ErrorPageProps = {
  reset: () => void
}

const ErrorPage = ({ reset } : ErrorPageProps) => {
  return (
		<div className={styles.errorpageContainer}>
      <h2>Oops... Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className={styles.buttonRefresh}
      >
        Try Again
      </button>
		</div>
  );
};

export default ErrorPage