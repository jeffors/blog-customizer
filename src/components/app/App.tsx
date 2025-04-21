import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import styles from './App.module.scss';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export const App = () => {
	const [articleOptions, setArticleOptions] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleOptions.fontFamilyOption.value,
					'--font-size': articleOptions.fontSizeOption.value,
					'--font-color': articleOptions.fontColor.value,
					'--container-width': articleOptions.contentWidth.value,
					'--bg-color': articleOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleOptions={setArticleOptions} />
			<Article />
		</main>
	);
};
