import React, { useState, useEffect } from 'react';
import styles from './css/Top.module.css';
import Nav from './Nav.js';
import UserBtn from './UserBtn.js';
import Notiification from './Notification.js';
//import SocketStatus from './SockerStatus.js';

import { connect } from 'react-redux';
//import { updateProfile } from './../../redux/actions/Profile.js';

function Top(props) {
	/*useEffect(
		() => {
			fetch(window.base + '/user/api/profile/', { credentials: window.cred }) //fetching profile data
				.then((response) => response.json())
				.then((profileData) => props.updateProfile(profileData));
		},
		[ props ]
	);*/
	return (
		<div id={styles.topBar} className="d-flex flex-row align-items-center col-12 pl-2  text-light">
			<h1 className="display-3 ml-2 text-dark" id={styles.edu} onClick={() => window.location.assign('/')} align="center">
				eduHub--
			</h1> 
			<Nav/>
			<Notiification />  
			<UserBtn /> 
	
		</div>
	);
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
	return {
		//updateProfile: (data) => dispatch(updateProfile(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
