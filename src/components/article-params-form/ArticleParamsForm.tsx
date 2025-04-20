import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

import styles from './ArticleParamsForm.module.scss';
import { useEffect, useRef, useState } from 'react';
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

type ArticleParamsFormProps = {
	setArticleOptions: (options: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	setArticleOptions,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formOptions, setFormOptions] =
		useState<ArticleStateType>(defaultArticleState);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			const handleClick = (event: MouseEvent) => {
				const { target } = event;
				if (target instanceof Node && !rootRef.current?.contains(target)) {
					setIsOpen(false);
				}
			};

			window.addEventListener('mousedown', handleClick);

			return () => {
				window.removeEventListener('mousedown', handleClick);
			};
		}
	}, [isOpen]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setArticleOptions(formOptions);
		setIsOpen(false);
	}

	function handleReset() {
		setFormOptions(defaultArticleState);
		setArticleOptions(defaultArticleState);
		setIsOpen(false);
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: isOpen,
				})}
				ref={rootRef}>
				<form
					className={styles.form}
					onReset={handleReset}
					onSubmit={handleSubmit}>
					<Text as={'h2'} weight={800} size={31} uppercase>
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
