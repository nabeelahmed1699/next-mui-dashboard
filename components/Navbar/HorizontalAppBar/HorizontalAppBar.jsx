import React from 'react';
// components
import { Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// icons
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
const UpperBar = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 4,
				py: 1,
			}}
		>
			<Box>
				<Typography
					variant='caption'
					sx={{ fontWeight: 500 }}
					color='text.secondary'
				>
					Competence &gt; All
				</Typography>
				<Typography body='body1' sx={{ fontWeight: 500 }}>
					Overview
				</Typography>
			</Box>
			<Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
				<SortByAlphaIcon color='disabled' />
				<NightlightOutlinedIcon color='disabled' />
				<NotificationsIcon color='disabled' />
				<Button disableRipple variant='link'>
					<Avatar>B</Avatar>
					<Typography
						variant='caption'
						color='text.secondary'
						sx={{ fontWeight: 500, px: 1 }}
					>
						Blaise Defloo
					</Typography>
					<KeyboardArrowDownIcon color='disabled' />
				</Button>
			</Stack>
		</Box>
	);
};

const LowerBar = () => {
	const links = [
		{
			label: 'ALL',
			icon: null,
			variant: 'text',
			color: null,
		},
		{
			label: 'Newlec',
			icon: <KeyboardArrowDownIcon />,
			variant: 'link',
			color: 'text.secondary',
		},
		{
			label: 'Dauvister',
			icon: null,
			variant: 'link',
			color: 'text.secondary',
		},
		{
			label: 'Company',
			icon: null,
			variant: 'link',
			color: 'text.secondary',
		},
		{
			label: 'Company',
			icon: null,
			variant: 'link',
			color: 'text.secondary',
		},
	];
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<Box>
				<Button
					variant='link'
					sx={{
						borderRight: 1,
						borderRadius: 0,
						borderColor: 'grey.500',
						px: 4,
					}}
				>
					COMPANIES
				</Button>
				{links.map((link) => {
					return (
						<Button
							variant={link.variant}
							key={link.label}
							sx={{ fontSize: '12px', color: `${link.color}` }}
						>
							{link.label}
							{link.icon}
						</Button>
					);
				})}
			</Box>
			<Box sx={{ mr: 4 }}>
				<Button endIcon={<SettingsIcon />} sx={{ fontSize: '12px' }}>
					Manage
				</Button>
			</Box>
		</Box>
	);
};
const HorizontalAppBar = () => {
	return (
		<Card sx={{ borderRadius: 0 }}>
			<UpperBar />
			<Divider />
			<LowerBar />
		</Card>
	);
};

export default HorizontalAppBar;
