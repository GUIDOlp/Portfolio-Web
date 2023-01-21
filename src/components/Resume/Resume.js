import React, { useEffect, useState } from 'react';
import Subtitle from '../utilities/Subtitle/Subtitle';
import ItemResume from './ItemResume';
import './Resume.css';
import { useContext } from 'react';
import LangContext from '../../context/LangContext';

const Resume = () => {
	const { texts } = useContext(LangContext);

	const [items, setItem] = useState(texts.resumeItemsContent);

	useEffect(() => {
		texts.resumeItemsContent.map((item) => {
			item.open = false;
		});
		setItem(texts.resumeItemsContent);
	}, [texts]);

	const toggle = (index) => {
		setItem(
			items.map((item, i) => {
				if (i === index) {
					item.open = !item.open;
				} else {
					item.open = false;
				}
				return item;
			})
		);
	};

	return (
		<div
			className='resume-container'
			id='resume'
		>
			<Subtitle>{texts.resumeTitle}</Subtitle>
			<div
				className='resume'
				data-aos='zoom-in'
			>
				{items.map((item, index) => (
					<ItemResume
						item={item}
						index={index}
						toggle={toggle}
					/>
				))}
			</div>
		</div>
	);
};

export default Resume;
