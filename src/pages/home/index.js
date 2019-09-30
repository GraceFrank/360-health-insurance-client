import React from 'react';
import Logo from '../../commons/Logo';
import HeroBanner from '../../components/HeroBanner';
import Advantages from '../../components/Advantages';
import PlanOptions from '../../components/PlanOptions';

const index = () => {
	return (
		<div>
			<Logo />
			<HeroBanner></HeroBanner>
			<Advantages></Advantages>
			<PlanOptions></PlanOptions>
		</div>
	);
};

export default index;
