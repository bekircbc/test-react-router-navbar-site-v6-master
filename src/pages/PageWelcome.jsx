import { useContext } from 'react';
import { AppContext } from '../AppContext';
export const PageWelcome = () => {
	const { siteStatus, toggleStatus } = useContext(AppContext);
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>Welcome to this site.</p>
			<h2>{siteStatus}</h2>
			<p>
				<button onClick={toggleStatus}>Toggle Status</button>
			</p>
		</div>
	);
};
