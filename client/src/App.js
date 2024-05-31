import Main from "./pages/Main";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
       <Route  path="SENT" element={} />
   </Route>
    )
  )
    
  function App() {
    return (
    <RouterProvider router= {router} />
    

    );
  }

export default App;
