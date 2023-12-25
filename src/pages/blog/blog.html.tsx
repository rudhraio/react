function BlogHTML({ selectedBlogData }: any) {
    const {
        title = "",
        description = "",
        author = "",
        author_about = "",
        author_image = "",
        image = "",
        tag = "",
        created_at = new Date()
    } = selectedBlogData;

    return <>
        <article className="flex flex-col items-start justify-between">
            {
                image &&
                <div className="w-[100%] h-[480px] relative overflow-hidden rounded-lg shadow-lg  my-2">
                    <img src={image} alt="" className="object-center w-full h-full object-cover " />
                </div>
            }

            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 capitalize">
                    <p>
                        <span className="absolute inset-0"></span>
                        {title}
                    </p>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                {author_image && <img src={author_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />}

                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {author}
                        </a>
                    </p>
                    <p className="text-gray-600">{author_about}</p>
                </div>
            </div>
            <div className="flex items-center gap-x-4 text-xs my-5">
                <time dateTime="2020-03-16" className="text-gray-500">{

                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    }).format(new Date(created_at))
                }</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{tag}</a>
            </div>

        </article>
    </>
}

export default BlogHTML;