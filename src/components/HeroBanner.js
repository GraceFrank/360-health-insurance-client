import React from 'react';
import { Image, Button, Container } from 'semantic-ui-react';

export default function HeroBanner() {
	return (
		<div style={{ backgroundColor: '#fcfcfd', margin: '2rem' }}>
			<div className='text-area'>
				<h1>Get Affordable Health Insurance, Fast</h1>
				<p className='banner-paragraph'>Sign up with as little as ₦1,400 per month in 5 minutes!</p>
				<Button size='big' content='Get started' style={{ color: 'white', backgroundColor: '#094063' }} />
			</div>
			<Container>
				<Image style={{ display: 'inline' }} size='large' src='/assets/undraw_motherhood_7htu.svg' />
				<Image style={{ display: 'inline' }} size='large' src='/assets/undraw_fatherhood_7i19.svg' />
			</Container>
		</div>
	);
}
