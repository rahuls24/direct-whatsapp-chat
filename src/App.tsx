import AppHeader from './components/AppHeader';
import DirectChatForm from './features/direct-chat/components/form/DirectChatForm';

function App() {
	return (
		<>
			<RootLayout />
		</>
	);
}

export default App;

// Helper function
function RootLayout() {
	return (
		<>
			<AppHeader />
      <DirectChatForm />
		</>
	);
}
