import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default function Advantages() {
	return (
		<div style={{ margin: '2rem', textAlign: 'center' }}>
			<h2>Designed Especially For You</h2>
			<Grid stackable>
				<Grid.Row>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='hospital outline'></Icon>
						<h3 style={{ marginBottom: '2rem' }}>Find Hospitals Near You</h3>
						<p>
							With access to use and roam through the best hospitals in Nigeria, you are sure to be at ease in case of
							an emergency. See our hospital list.
						</p>
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='credit card outline'></Icon>
						<h3>Affordable Monthly Payments</h3>
						<p>Invest in your health and get quality healthcare with small monthly payments.</p>
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='handshake outline'></Icon>
						<h3>Awesome Customer Care</h3>
						<p>As your HMO, we pledge and promise to always be there for you wherever you are, whenever you call.</p>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='chart line'></Icon>
						<h3>More Loyalty, More Benefits</h3>
						<p>
							If you stick with us as your HMO, we increase your benefits every quarter and we won’t increase the price.
							Read how our graduated benefits work.
						</p>
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='wpforms'></Icon>
						<h3>No Long Forms, Instant Access</h3>
						<p>
							No need to fill 10-page HMO forms and wait 10 days to get good health insurance. Sign up in 4 mins and get
							instant access to care.
						</p>
					</Grid.Column>
					<Grid.Column style={{ margin: '0 auto' }} width={4}>
						<Icon className='icons' size='huge' name='doctor'></Icon>
						<h3>Consult With Qualified Doctors</h3>
						<p>We let you access quality care in Nigeria from wherever you are, whenever you want.</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
