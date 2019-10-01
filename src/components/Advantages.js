import React from 'react';
import { Grid, Icon, Container } from 'semantic-ui-react';

export default function Advantages() {
	return (
		<Container style={{ margin: '50px 0px 100px 0px ' }}>
			<div style={{ margin: '2rem', textAlign: 'center' }}>
				<h2>Designed Especially For You</h2>
				<Grid stackable>
					<Grid.Row>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='hospital outline'></Icon>
							<h3>Find Hospitals</h3>
							<p>
								Track the best Hospitals and Nearest to you for your Health Care
						</p>
						</Grid.Column>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='credit card outline'></Icon>
							<h3>Affordable Daily to monthly and Yearly Plans</h3>
							<p>Invest in your health and get quality healthcare with small monthly payments.</p>
						</Grid.Column>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='handshake outline'></Icon>
							<h3>We are here to Help 24/7</h3>
							<p>We commit to been available when you need us, wherever you are and whenever you call</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='chart line'></Icon>
							<h3>Be Rewarded</h3>
							<p>
								As you stay commited to Insuring your Health with us, you stand the chance of getting rewardable benefits and also unlock more  services without your plan changing when you subscribe
						</p>
						</Grid.Column>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='wpforms'></Icon>
							<h3>Get Access, With Easy Sign-Up </h3>
							<p>
								You don't need large amount of Information to get Access to our Services, in easy steps and less than 5 minutes, you are onboarded and already getting good health services
						</p>
						</Grid.Column>
						<Grid.Column style={{ margin: '0 auto' }} width={4}>
							<Icon className='icons' size='huge' name='doctor'></Icon>
							<h3>Get help from amazing Doctors</h3>
							<p>Get help with health related issues and from qualified doctors anywhere you are</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</Container>
	);
}
