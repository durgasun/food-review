import { Toaster } from 'react-hot-toast';
import './App.css';
import FRRoutes from './routes/route';

function App() {
  console.log("hello")
  return (
    <>
      <FRRoutes />
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
 
  );
}

export default App;
