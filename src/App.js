
import './App.css';
import SearchResults from './pages/SearchResults'
import Home from './pages/Home';
import { Route,RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"search",
  element:<SearchResults/>
}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
