import React from 'react';
import './ItemResume.css';

const ItemResume = ({ item, index, toggle }) => {
	return (
		<div
			className={'item ' + (item.open ? 'open' : '')}
			key={index}
			onClick={() => toggle(index)}
		>
			<div
				className='item-container'
				data-aos='zoom-in'
			>
				<div className='item-icon'>{item.icon}</div>
				<div className='item-title'>{item.title}</div>
			</div>
			<div className='item-content'>
				<p>{item.content}</p>
				<p>{item.content2}</p>
				<p>{item.content3}</p>
				<p>{item.content4}</p>
				<p>{item.content5}</p>
			</div>
		</div>
	);
};

export default ItemResume;
