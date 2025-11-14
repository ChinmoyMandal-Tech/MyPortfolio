import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/about/About.jsx'
import ProjectPage from './components/project/ProjectPage.jsx'
import A from "./components/a.jsx";
import PageNotFound from './components/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "resume", element: <A /> },
      { path: "*", element: <PageNotFound /> },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
