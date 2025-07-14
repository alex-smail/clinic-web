import styles from './button.module.css';
// eslint-disable-next-line react/prop-types
export const Button = ({ style, onClick, children, ...props }) => (
	<button
		className={`${styles.btn} ${styles[style]}`}
		onClick={onClick}
		{...props}
	>
		{children}
	</button>
);
