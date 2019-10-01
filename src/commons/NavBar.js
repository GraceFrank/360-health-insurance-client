import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Dropdown } from 'semantic-ui-react';
import Logo from './Logo';
// import { AuthContext } from '../../context/auth';

export default function NavBar() {
	//destructure context to get user and logout
	// const { user, logout } = useContext(AuthContext);

	const pathname = window.location.pathname;
	const path = pathname === '/' ? '' : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	// ******* this navbar logic will change when we implement state management
	const navBar = (
		// const navBar = user ? (
		// 	<Menu style={{ borderWidth: '0px' }} className='ui' stackable inverted pointing secondary>
		// 		<Logo as={Link} to='/'></Logo>
		// 		<div className='ui container'>
		//   <Menu.Item
		//   as={Link}
		//   name='our-health-plans'
		//   active={activeItem === 'our-health-plans'}
		//   onClick={handleItemClick}
		//   to='/our-health-plans'
		// />
		// <Menu.Item as={Link} name='About' active={activeItem === 'about'} onClick={handleItemClick} to='/About' />
		// 			<Menu.Item
		// 				as={Link}
		// 				name='dashboard'
		// 				active={activeItem === 'dashboard'}
		// 				onClick={handleItemClick}
		// 				to='/dashboard'
		// 			/>
		// 			<Menu.Item as={Link} name='logout' className='right' onClick={logout} to='/' />
		// 		</div>
		// 	</Menu>
		// ) : (
		<Menu style={{ borderWidth: '0px', fontSize: '1.2rem' }} pointing secondary className='menu-shadows'>
			<div className='ui container'>
				<Logo as={Link} to='/'></Logo>
				<div className='right item'>
					<Menu.Item>
						<Dropdown text='Our Health Plans'>
							<Dropdown.Menu>
								<Dropdown.Item as={Link} to='/register/you-and-others' text='For You & Others' />
								<Dropdown.Item as={Link} to='/register/family' text='For Family & Loved Ones' />
								<Dropdown.Item as={Link} to='/register/business' text='For Business' />
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Item>
					<Menu.Item as={Link} name='about' active={activeItem === 'about'} onClick={handleItemClick} to='/about' />
					<Menu.Item as={Link} name='login' active={activeItem === 'login'} onClick={handleItemClick} to='/login' />
					<Menu.Item>
						<Button
							as={Link}
							to='/register'
							content='Get started'
							style={{ color: 'white', backgroundColor: '#094063' }}
						/>
					</Menu.Item>
				</div>
			</div>
		</Menu>
	);
	return navBar;
}
