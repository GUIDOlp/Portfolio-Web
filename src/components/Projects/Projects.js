import React from 'react';
import './Projects.css';
import Subtitle from '../utilities/Subtitle/Subtitle';
import ProjectsCards from './ProjectsCards';
import { useContext } from 'react';
import LangContext from '../../context/LangContext';

const Proyects = () => {
	const { texts } = useContext(LangContext);

	return (
		<div
			className='projects-container'
			id='projects'
		>
			<Subtitle>{texts.projectsTitle}</Subtitle>
			<div
				className='projects'
				data-aos='zoom-in'
			>
				<ProjectsCards />
			</div>
		</div>
	);
};

export default Proyects;
