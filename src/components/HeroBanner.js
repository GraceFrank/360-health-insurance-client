import React from 'react';
import { Image, Button, Container, Grid, GridRow, GridColumn } from 'semantic-ui-react';

export default function HeroBanner() {
	return (
		<div style={{ backgroundColor: '#fcfcfd', margin: '2rem' }}>

			<Container style={{ margin: '50px 0px 100px 0px ' }}>
				<Grid>
					<GridRow>
						<GridColumn width={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<div className='text-area'>
								<h1>Get Affordable Health Insurance, Fast</h1>
								<p className='banner-paragraph'>Sign up with as little as ₦520 per month and as Low as ₦20 on our Mobile USSD Platform in 5 msinutes!</p>
								<Button size='big' content='Get started' style={{ color: 'white', backgroundColor: '#094063' }} />
							</div>
						</GridColumn>
						<GridColumn width={8} >
							<Image style={{ display: 'inline' }} size='large' src='/assets/undraw_motherhood_7htu.svg' />
						</GridColumn>
					</GridRow>

				</Grid>

			</Container>
		</div>
	);
}