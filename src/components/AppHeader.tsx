import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const AppHeader = () => {
	return (
		<AppBar position='static' sx={{ marginBottom: '0px'}}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography variant='h6' component='div' gutterBottom>
							{'Direct Chat'}
						</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default AppHeader;