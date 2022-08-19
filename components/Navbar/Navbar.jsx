import { Box } from '@mui/material';
import React from 'react';
import HorizontalAppBar from './HorizontalAppBar/HorizontalAppBar';
import VerticalAppBar from './VerticalAppBar/VerticalAppBar';

const Navbar = ({ children }) => {
	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
				<Box sx={{ width: '15vw' }}>
					<VerticalAppBar />
				</Box>
				<Box sx={{ width: '85vw', border: 1 }}>
					<HorizontalAppBar />
					<Box>{children}</Box>
				</Box>
			</Box>
		</>
	);
};

export default Navbar;
