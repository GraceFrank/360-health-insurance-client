import React from 'react';
import { Grid, Image, Button, Container, CardContent, Card, CardHeader, CardDescription } from 'semantic-ui-react';

export default function PlanOptions() {
	return (
		<Container style={{ margin: '50px 0px 100px 0px ' }}>
			<div style={{ margin: '2rem', backgroundColor: '#fcfcfd' }}>
				<h2 style={{ marginBottom: '30px', textAlign: 'center' }}>A Plan That Suites You</h2>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Card wrapped ui={false} className='card-shadows'>
								<Image size='big' src='/assets/undraw_celebration_0jvk.svg' />
								<CardContent>
									<CardHeader>
										For You & Others
									</CardHeader>
									<CardDescription>
										Quality health plans you can immediately access by paying affordable monthly prices.
									</CardDescription>

								</CardContent>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Button
										size='big'
										content='Learn More'
										style={{
											color: '#094063', backgroundColor: 'white', border: '3px solid #094063',
											borderRadius: '10px'
										}}
									/>

								</CardContent>
							</Card>
						</Grid.Column>

						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Card className='card-shadows'>
								<Image size='big' src='/assets/undraw_back_to_school_inwc.svg' />
								<CardContent >
									<CardHeader>
										For Family & Loved Ones
									</CardHeader>
									<CardDescription>
										Budget-friendly health plans for your loved ones, parents and dependants that keep them well and healthy.
									</CardDescription>

								</CardContent>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Button
										size='big'
										content='Learn More'
										style={{ color: '#094063', backgroundColor: 'white', border: '3px solid #094063' }}
									/>
								</CardContent>
							</Card>
						</Grid.Column>

						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Card className='card-shadows'>
								<Image size='big' src='/assets/undraw_co-workers_ujs6.svg' />
								<CardContent>
									<CardHeader>
										For Business
									</CardHeader>
									<CardDescription>
										Quality health insurance for your employees that keeps them happy and healthy.
									</CardDescription>

								</CardContent>
								<CardContent style={{ display: 'flex', justifyContent: 'center' }}>
									<Button
										size='big'
										content='Learn More'
										style={{ color: '#094063', backgroundColor: 'white', border: '3px solid #094063', }}
									/>
								</CardContent>
							</Card>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</Container>
	);
}
