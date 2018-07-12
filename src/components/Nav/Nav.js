import React from 'react';
import './Nav.css'

const Nav = props => (
	<nav>
		<ul>
			<li className='brand'>
				<a href='/clickyGame/'>{props.title}</a>
			</li>

			<li id='correct'>{props.correct}</li>

			<li id='cur-score'>Score: {props.score}</li>

			<li id='top-score'>Top Score: {props.topScore}</li>
		</ul>
	</nav>
);

export default Nav;