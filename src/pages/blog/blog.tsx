import { useParams } from "react-router-dom";
import BlogHTML from "./blog.html";
import { useEffect, useState } from "react";
import { blogGetByIdAPI } from "../../utils/api/blog.api";

function Blog() {

    const { id = "" } = useParams();
    const [selectedBlogData, setSelectedBlogData] = useState({});


    useEffect(() => {
        async function callAPI() {
            const tempBlogData = await blogGetByIdAPI(id);
            setSelectedBlogData(tempBlogData.data.data);
        }
        callAPI();
    }, []);


    return <BlogHTML selectedBlogData={selectedBlogData} />
}

export default Blog;