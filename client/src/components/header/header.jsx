import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button/button';
import styles from './header.module.css';

export const Header = () => (
	<header className={styles.header}>
		<Link to="/login">
			<Button style="header">Войти</Button>
		</Link>
	</header>
);
