import Article from "../../utils/components/article/article";


function HomeHTML({ blogData = [] }: any) {

    return <>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogData.map((blog: any) => {
                return <Article blog={blog} />
            })}
        </div>
    </>
}

export default HomeHTML;