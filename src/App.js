import Component from "./Component/Components2/Component";
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import Schools from "./Component/Pages/Schools/Schools";
import OurStory from "./Component/Pages/Our Story/OurStory";
import Out from "./OutLet/Out";
import Tuition from "./Component/Pages/Tuition/Tuition";
function App() {
  //#01427a
  //#01b3ef

  const router = createBrowserRouter([
    {
      path:'/',
      Element: <Out />,

      children: [
        {path:'/', element: <Component />},
        {path:'/Schools',element: <Schools />},
        {path:'/OurStory', element: <OurStory />},
        {path: '/Tuition', element: <Tuition />}
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App;
