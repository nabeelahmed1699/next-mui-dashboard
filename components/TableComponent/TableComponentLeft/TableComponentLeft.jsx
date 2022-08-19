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
import { alpha, styled } from '@mui/material/styles';

function createCell(label, upperValue, lowerValue) {
	return { label, upperValue, lowerValue };
}

const columns = [
	createCell('Visite médicale', 12, 106),
	createCell('Poste de sécurité', 90, 12),
	createCell('Secouriste industriel', 34, 390),
	createCell('Eq. Première Intervention', 32, 98),
	createCell('Base', 23, 89),
	createCell('Cadre', 32, 78),
	createCell('Nacelle', 109, 79),
	createCell('Harnais ', 102, 89),
	createCell('Travaux en hauteur ', 19, 56),
	createCell('Utilisateur', 12, 23),
	createCell('Monteur', 90, 87),
	createCell('Inspecteur', 56, 65),
	createCell('Pontier cabine', 89, 24),
	createCell('Pontier poiré', 34, 90),
	createCell('Radiocommandé', 23, 43),
	createCell('Elévateur à fourches', 12, 90),
	createCell('Télescopique rotatif', 87, 34),
	createCell('G. de charges (RIGGER)', 87, 34),
	createCell('Elingage de charges', 23, 89),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
	createCell('Elingage de charges', 34, 76),
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	padding: 0,
	border: `1px solid ${theme.palette.divider}`,
	background: '#2C8EFF',
	height: '100px',
}));
const User = () => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Avatar alt='Micheal' src={pic} />
			<Typography sx={{ whiteSpace: 'nowrap', ml: 2 }}>
				Micheal Morbius
			</Typography>
		</Box>
	);
};

const TableComponentLeft = () => {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell align='right'>#</TableCell>
						<TableCell align='right'>USER</TableCell>
						<TableCell align='right'>TYPE</TableCell>
						{columns.map((col, index) => {
							return (
								<StyledTableCell key={index}>
									<Grid
										container
										sx={{
											textAlign: 'center',
											justifyContent: 'space-between',
											width: '70px',
											border: 1,
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
					<TableRow>
						<TableCell align='right'>1</TableCell>
						<TableCell align='right'>
							<User />
						</TableCell>
						<TableCell align='right'>
							<Box
								sx={{
									bgcolor: '#DAEBFF',
									color: '#2C8EFF',
									py: 1,
									px: 2,
									borderRadius: 1,
								}}
							>
								Internal
							</Box>
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponentLeft;
