import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useMemo, useState } from 'react';
import App from '../../App';
export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});
const RootComponent = () => {
	const [mode, setMode] = useState<PaletteMode>(() => getDefaultThemePreference());
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode],
	);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
export default RootComponent;

// Util function 
function getDefaultThemePreference():PaletteMode {
    return localStorage.getItem('direct-chat-theme-preference')==='dark'?'dark':'light'
}