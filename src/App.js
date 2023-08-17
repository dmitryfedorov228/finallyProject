
import Navbar from './components/Widgets/Navbar/Navbar';
import AppRouter from './contexts/Router/RouterProvider';
import { useTheme } from './contexts/Theme/ThemeProvider';
import Sidebar from './components/Widgets/Sidebar/Sidebar';
import Slider from './components/Features/Slider/Slider';


const App = () => {
  const { theme } = useTheme()

 

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      
      <div className='content_page'>
        <Sidebar />
        <AppRouter />
        
      </div>
     
    </div>
  );
};

export default App;