import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	ArticleStateType,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formOptions, setFormOptions] =
		useState<ArticleStateType>(defaultArticleState);

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
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isOpen,
				})}>
				<form className={styles.form}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={formOptions.fontFamilyOption}
						onChange={(option) => {
							setFormOptions({ ...formOptions, fontFamilyOption: option });
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={formOptions.fontSizeOption}
						onChange={(option) => {
							setFormOptions({ ...formOptions, fontSizeOption: option });
						}}
						title='Размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={formOptions.fontColor}
						onChange={(option) => {
							setFormOptions({ ...formOptions, fontColor: option });
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={formOptions.backgroundColor}
						onChange={(option) => {
							setFormOptions({ ...formOptions, backgroundColor: option });
						}}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={formOptions.contentWidth}
						onChange={(option) => {
							setFormOptions({ ...formOptions, contentWidth: option });
						}}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
