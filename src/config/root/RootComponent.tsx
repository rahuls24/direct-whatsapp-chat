import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React, { useMemo, useState } from 'react';
import { initReactI18next } from 'react-i18next';
import App from '../../App';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'hn'],
    fallbackLng: 'hn',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
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