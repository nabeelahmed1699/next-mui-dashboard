import {
	Box,
	Card,
	Typography,
	Stack,
	CardContent,
	Button,
	Divider,
	IconButton,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../../assets/logo 1.png';

// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DifferenceIcon from '@mui/icons-material/Difference';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import InfoIcon from '@mui/icons-material/Info';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const LinkBox = ({ links, HideTypography }) => {
	return (
		<Box sx={{ py: 4 }}>
			{links.map((link) => {
				return (
					<Button
						key={link.label}
						fullWidth
						sx={{
							pl: 2,
							py: 1.2,
							justifyContent: 'flex-start',
							borderRadius: 1.5,
							whiteSpace: 'nowrap',
							'&.MuiButton-root:hover': {
								background: '#42A4DF',
								color: 'white',
							},
						}}
						disableRipple
						startIcon={link.icon}
					>
						{HideTypography ? '' : link.label}
					</Button>
				);
			})}
		</Box>
	);
};
const lowerNavLinks = [
	{
		label: 'Users & Departements',
		icon: <PersonIcon />,
	},
	{
		label: 'Roles & Permissions',
		icon: <WorkIcon />,
	},
	{
		label: 'Clients, Sites & Projects',
		icon: <TableRestaurantIcon />,
	},
	{
		label: 'Informations',
		icon: <InfoIcon />,
	},
	{
		label: 'Competence settings',
		icon: <AppSettingsAltIcon />,
	},
];
const upperNavLinks = [
	{
		label: 'Dashboard',
		icon: <HomeOutlinedIcon />,
	},
	{
		label: 'Observations',
		icon: <CenterFocusStrongIcon />,
	},
	{
		label: 'ToolBox Meetings',
		icon: <HomeRepairServiceIcon />,
	},
	{
		label: 'Site inspections',
		icon: <AssignmentIcon />,
	},
	{
		label: 'LMRA',
		icon: <AvTimerIcon />,
	},
	{
		label: 'Competence',
		icon: <DifferenceIcon />,
	},
];

const style = {
	position: 'fixed',
	left: 0,
	minHeight: '100vh',
	width: '300px',
	zIndex: '99',
};
const VerticalAppBarWider = ({ menuOpenHandler }) => {
	return (
		<Card sx={style}>
			<CardContent>
				<Stack direction='row' spacing={2}>
					<Image src={logo} alt='logo image' />
					<Typography variant='h6' color='primary'>
						App Name
					</Typography>
				</Stack>
				<LinkBox links={upperNavLinks} />
				<Typography color='text.secondary'>MANAGE</Typography>
				<LinkBox links={lowerNavLinks} />
			</CardContent>
			<Divider />
			<Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
				<IconButton onClick={menuOpenHandler}>
					<MenuOpenIcon />
				</IconButton>
			</Box>
		</Card>
	);
};

const VerticalAppBarThiner = ({ menuOpenHandler }) => {
	return (
		<Card sx={{ ...style, width: '80px' }}>
			<CardContent>
				<Stack direction='row' spacing={2}>
					<Image src={logo} alt='logo image' />
				</Stack>
				<LinkBox links={upperNavLinks} HideTypography />
				<Divider />
				<LinkBox links={lowerNavLinks} HideTypography />
			</CardContent>
			<Divider />
			<Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
				<IconButton onClick={menuOpenHandler}>
					<MenuIcon />
				</IconButton>
			</Box>
		</Card>
	);
};
const VerticalAppBar = () => {
	const media = useMediaQuery('max-width:700px');
	const [navbarOpen, setNavbarOpen] = useState(!media);
	function menuOpenHandler() {
		setNavbarOpen(!navbarOpen);
	}

	if (navbarOpen)
		return <VerticalAppBarWider menuOpenHandler={menuOpenHandler} />;
	return <VerticalAppBarThiner menuOpenHandler={menuOpenHandler} />;
};
export default VerticalAppBar;
