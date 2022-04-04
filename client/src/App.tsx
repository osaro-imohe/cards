import './App.css';
import { ContextProvider } from './context';
import Navigation from './navigation';

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider> 
  );
}

export default App;
