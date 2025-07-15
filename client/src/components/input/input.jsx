/* eslint-disable react/prop-types */
import React from 'react';
import styles from './input.module.css';

export const Input = ({ type = "text", placeholder, ...props }) => (
	<input
		type={type}
		className={styles.input}
		placeholder={placeholder}
		// value={value}
		// onChange={onChange}
		{...props}
	/>
);
