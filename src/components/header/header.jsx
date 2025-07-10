import { Button } from '../button/button';
import styles from './header.module.css';

export const Header = () => (
	<header className={styles.header}>
		<Button style="header">Войти</Button>
	</header>
);
