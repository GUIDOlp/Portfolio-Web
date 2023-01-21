import React from 'react';
import './LanguageButtons.css';
import spain from '../../assets/spain.png';
import eng from '../../assets/united-states-of-america.png';
import LangContext from '../../context/LangContext';
import { useContext } from 'react';

const LanguageButtons = () => {
	const { handleLanguageToEnglish, handleLanguageToSpanish } =
		useContext(LangContext);

	return (
		<div
			className='flags'
			id='flags'
		>
			<button
				className='flag'
				onClick={handleLanguageToSpanish}
			>
				<img
					src={spain}
					alt='Spanish'
				/>
			</button>
			<button
				className='flag'
				onClick={handleLanguageToEnglish}
			>
				<img
					src={eng}
					alt='English'
				/>
			</button>
		</div>
	);
};

export default LanguageButtons;
