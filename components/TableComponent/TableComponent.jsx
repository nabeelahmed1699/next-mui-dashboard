import { Box, Divider, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import TableComponentLeft from './TableComponentLeft/TableComponentLeft';
const TableComponent = () => {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					py: 5,
					px: 3,
				}}
			>
				<Typography>Overview</Typography>
				<Stack direction='row' spacing={2}>
					<Link href='#' sx={{ textDecoration: 'none' }}>
						Competency Matrix
					</Link>
					<Divider orientation='vertical' flexItem />
					<Typography sx={{ color: 'GrayText' }}>Worker documents</Typography>
				</Stack>
			</Box>
			<TableComponentLeft />
		</Box>
	);
};

export default TableComponent;
