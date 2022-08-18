import { Box } from '@mui/system';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
	return (
		<Navbar>
		<Box sx={{ bgcolor: '#f4f4f4',minHeight:'100vh'}}>
			<Box>
				<h1>Hello world</h1>
			</Box>
			</Box>
		</Navbar>
	);
}
