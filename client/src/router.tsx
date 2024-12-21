import { createBrowserRouter } from "react-router"
import Navbar from "./Layout/navGeneric"
import PageListProjects from "./Pages/pageListProjects"
import CreateProjects from "./Pages/createProjects"
import EditProjects from "./Pages/editProjects"

export const router = createBrowserRouter([{
    path: '/', element: <Navbar />, children: [
        { path: '/', index: true, element: <PageListProjects /> },
    ]
}, {
    path: '/project/', element: <Navbar />, children: [
        { path: 'create', element: <CreateProjects />},
        { path: 'edit/:id', element: <EditProjects />},
    ]
}])