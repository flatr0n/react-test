import { useState, useEffect } from 'react';

function getSize(){
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
}

function useWindowSize(){
	let [size, setSize] = useState(getSize());
	let handler = function(){
		setSize(getSize());
	}

	useEffect(() => {
		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		}
	}, []);

	return size;
}

export default useWindowSize;