import { useEffect, useState } from "react";
import HomeHTML from "./home.html";
import { blogGetAPI } from "../../utils/api/blog.api";
import { logger } from "../../utils/logger";


function Home() {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        async function callAPI() {
            const tempBlogData = await blogGetAPI();
            setBlogData(tempBlogData.data.data);
            logger(`blogData: ${blogData}`);
        }
        callAPI();
    }, []);

    return <HomeHTML blogData={blogData} />
}

export default Home;