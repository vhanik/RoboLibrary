import React from 'react';

const SearchBox = ({ searchfield, typing }) => {
	return (
		<div className='pa3'>
		<input
		className='input-reset ba b--black-20 bw2 pa2 mb2 db w-50 center' 
		type='search' 
		placeholder='Search robots' 
		onChange={typing} 
		/>		
		</div>
	);
}

export default SearchBox