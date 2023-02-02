import './App.css';
import SearchResults from './pages/SearchResults'
import Home from './pages/Home';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/search",
  element:<SearchResults/>
}])

function App() {
  return (
    <div className="App bg-[#FAF8F8]">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
