import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Main from "../Layout/Main";
import Contact from "../Page/Contact/Contact";
import Facilities from "../Page/Facilities/Facilites/Facilities";
import Library from "../Page/Facilities/LibaryDetailInfo/LibraryDetailInfo";
import Club from "../Page/Club/Club";
import StudentAcivities from "../Page/StudentActivities/StudentAcivities";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'facilities',
                element:<Facilities></Facilities>
            },
            {
                path:'facilities/library',
                element:<Library></Library>
            },
            {
                path:'/club',
                element:<Club></Club>
            },
            {
                path:'/activities',
                element:<StudentAcivities></StudentAcivities>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
        
        
        
    }
])