import {
	Box,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import React from 'react';
import pic from '../../../assets/Ellipse 37.png';
import { styled } from '@mui/material/styles';

// icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
// data
import { columns, users } from '../../../data';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	padding: 0,
	borderLeft: `1px solid white`,
	background: '#2C8EFF',
	height: '100px',
}));
const User = ({ name }) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Avatar alt='Micheal' src={pic} />
			<Typography sx={{ whiteSpace: 'nowrap', ml: 2 }}>{name}</Typography>
		</Box>
	);
};
const CustomAlert = ({ severity }) => {
	let textColor = '';
	if (severity === 'success') textColor = '#47CA5B';
	else if (severity === 'danger') textColor = '#ED4C5C';
	else textColor = '#FACC1D';

	let bgColor = '';
	if (severity === 'success') bgColor = 'rgba(71,202,91,0.23)';
	else if (severity === 'danger') bgColor = '#FFD8DC';
	else bgColor = '#FFEB95';
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: bgColor,
				p: 2,
				borderRadius: '100%',
				aspectRatio: 1,
				width: '24px',
				height: '24px',
			}}
		>
			{severity === 'success' ? (
				<CheckCircleIcon sx={{ color: textColor }} />
			) : severity === 'warning' ? (
				<ErrorIcon sx={{ color: textColor }} />
			) : (
				<CancelIcon sx={{ color: textColor }} />
			)}
		</Box>
	);
};
const CustomChip = ({ type }) => {
	let bgColor = type === 'internal' ? '#DAEBFF' : '#FFF2EA';
	let textColor = type === 'internal' ? '#2C8EFF' : '#EB7421';

	return (
		<Box
			sx={{
				bgcolor: bgColor,
				color: textColor,
				py: 1,
				px: 2,
				borderRadius: 1,
			}}
		>
			<Typography sx={{ textTransform: 'capitalize' }}>{type}</Typography>
		</Box>
	);
};
const TableComponentLeft = () => {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell align='center'>#</TableCell>
						<TableCell align='center'>USER</TableCell>
						<TableCell align='center'>TYPE</TableCell>
						{columns.map((col, index) => {
							return (
								<StyledTableCell key={index}>
									<Grid
										container
										sx={{
											textAlign: 'center',
											justifyContent: 'space-between',
											width: '70px',
											height: '100%',
										}}
									>
										<Grid item sm={12} sx={{ bgcolor: '#FDC841' }}>
											{col.upperValue}
										</Grid>
										<Grid
											item
											sm={12}
											sx={{
												writingMode: 'vertical-lr',
												p: 2,
												// height: '100%',
												textAlign: 'center',
												color: 'white',
											}}
										>
											{col.label}
										</Grid>
										<Grid item sm={12} sx={{ bgcolor: '#FB9D67' }}>
											{col.lowerValue}%
										</Grid>
									</Grid>
								</StyledTableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => {
						return (
							<TableRow key={user.id}>
								<TableCell>{user.id}</TableCell>
								<TableCell>
									<User name={user.name} />
								</TableCell>
								<TableCell>
									<CustomChip type={user.type} />
								</TableCell>
								{user.alerts.map((alert, index) => {
									return (
										<TableCell key={index}>
											<CustomAlert severity={alert} />
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponentLeft;
