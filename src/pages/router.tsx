import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import ErrorPage from "./errorPage";
import Home from "./home/home";
import Blog from "./blog/blog";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/blog/:id",
                Component: Blog
            }
        ]
    },

    // always has to be at end
    {
        path: "*",
        Component: ErrorPage
    }
]);

export default router;