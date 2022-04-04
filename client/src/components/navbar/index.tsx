/* eslint-disable no-use-before-define */
import { useMemo } from 'react';
import { capitalizeFirstLetter } from '../../helpers';
import Container from '../container';
import Text from '../text';

const Navbar = () => {
	const path = useMemo(() => window.location.pathname, [])
	return (
		<Container
			fullWidth
			alignItems="center"
			justifyContent="center"
			paddingTop="33px"
			paddingBottom="33px"
			paddingLeft="33px"
			paddingRight="33px"
			backgroundColor="black"
		>
			<Text bold text={`${path === '/' ? 'Dashboard' : capitalizeFirstLetter(path.slice(1, path.length))}`} variant="secondary" /> 
		</Container>
	)
};

export default Navbar;
