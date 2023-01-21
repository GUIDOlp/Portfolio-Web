import React from 'react';
import SocialNetworks from '../utilities/SocialNetworks/SocialNetworks';
import './Footer.css';
import MyForm from './MyForm';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import Subtitle from '../utilities/Subtitle/Subtitle';
import { useContext } from 'react';
import LangContext from '../../context/LangContext';

const Footer = () => {
	const { texts } = useContext(LangContext);

	return (
		<div
			className='footer-container'
			id='contact-me'
		>
			<Subtitle>{texts.footerTitle}</Subtitle>
			<div
				className='footer'
				data-aos='zoom-in'
			>
				<div className='footer-content'>
					<MyForm />
					<div className='footer-contacts'>
						<div
							className='comment'
							data-aos='zoom-in'
						>
							<p>{texts.footerContent}</p>
						</div>
						<div className='whatsapp-email-container'>
							<div
								className='whatsapp-email'
								data-aos='zoom-in'
							>
								<FaWhatsapp className='contact-logo' />
								<p>(54) 11 4914-4055</p>
							</div>
							<div
								className='whatsapp-email'
								data-aos='zoom-in'
							>
								<AiFillMail className='contact-logo' />
								<p>enriquespinelli.coder@gmail.com</p>
							</div>
						</div>
					</div>
					<div className='footer-social'>
						<SocialNetworks />
						<div
							className='footer-photo'
							data-aos='zoom-in'
						></div>
					</div>
				</div>
			</div>
			<p className='copyright'>{texts.copyright}.</p>
		</div>
	);
};

export default Footer;
