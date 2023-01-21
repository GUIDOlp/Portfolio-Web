import React from 'react';
const Message = ({ msg, bgColor }) => {
	let styles = {
		padding: '1rem',
		marginBottom: '1rem',
		textAlign: 'center',
		border: '2px solid white',
		color: 'rgb(255, 255, 255)',
		borderRadius: '1rem',
		fontWeight: 'bold',
		backgroundColor: bgColor,
	};

	return (
		<div style={styles}>
			<p dangerouslySetInnerHTML={{ __html: msg }} />
		</div>
	);
};

export default Message;
