import { Link } from "react-router-dom";

function HeaderHTML() {
    return <>
        <div className="mx-auto lg:mx-0 mb-10 border-b border-gray-200 pb-10 sm:mb-16 sm:pb-16">
            <div className="flex gap-x-6">
                <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
                    React + Typescript + Tailwind + Redux
                </h2>
                <Link to="/" className="cursor-pointer">
                    <img src="/assets/images/square.png" alt="square logo" className="w-5 h-5 mt-3 icon-animation" />
                </Link>
            </div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                This is a boilerplate code using the above mentioned libraries
            </p>
        </div>
    </>
}

export default HeaderHTML;