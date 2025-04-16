import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					handleClick();
				}}
			/>
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
