import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

export default function PlanOptions() {
	return (
		<div style={{ margin: '2rem', textAlign: 'center', backgroundColor: '#fcfcfd' }}>
			<h2 style={{ marginBottom: '40px' }}>A Plan That Suites You</h2>
			<Grid stackable>
				<Grid.Row>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Image style={{ margin: '0 auto' }} size='small' src='/assets/undraw_celebration_0jvk.svg' />
						<h3 style={{ marginBottom: '2rem' }}>For You & Others</h3>
						<p>Quality health plans you can immediately access by paying affordable monthly prices.</p>
						<Button
							size='big'
							content='Learn More'
							style={{ color: '#094063', backgroundColor: 'white', border: '3px solid #094063' }}
						/>{' '}
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Image style={{ margin: '0 auto' }} size='small' src='/assets/undraw_back_to_school_inwc.svg' />
						<h3>For Family & Loved Ones</h3>
						<p>
							Budget-friendly health plans for your loved ones, parents and dependants that keep them well and healthy.
						</p>
						<Button
							size='big'
							content='Learn More'
							style={{ color: '#094063', backgroundColor: 'white', border: '3px solid #094063' }}
						/>{' '}
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Image style={{ margin: '0 auto' }} size='small' src='/assets/undraw_co-workers_ujs6.svg' />
						<h3>For Business</h3>
						<p>Quality health insurance for your employees that keeps them happy and healthy.</p>
						<Button
							size='big'
							content='Learn More'
							style={{ color: '#094063', backgroundColor: 'white', border: '3px solid #094063' }}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
