import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import A from "./components/a.jsx";
import B from "./components/b.jsx";
import PageNotFound from './components/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <B /> },
      { path: "projects", element: <A /> },
      { path: "resume", element: <B /> },
      { path: "xyz", element: <A /> },
      { path: "*", element: <PageNotFound /> },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
