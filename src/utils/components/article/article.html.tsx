import { Link } from "react-router-dom";

function ArticleHTML({ blog }: any) {
    const {
        title = "",
        description = "",
        author = "",
        author_about = "",
        author_image = "",
        slug = "",
        tag = "",
        created_at = ""
    } = blog;
    return <>
        <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">{
                    new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                    }).format(new Date(created_at))
                }</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{tag}</a>
            </div>
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 capitalize">
                    <Link to={"blog/" + slug}>
                        <span className="absolute inset-0"></span>
                        {title}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {description}
                </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <img src={author_image} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
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
        </article>
    </>
}

export default ArticleHTML;