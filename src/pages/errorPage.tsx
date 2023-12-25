function ErrorPage() {
    return <>
        <section className="grid lg:flex items-center justify-between mt-20 lg:mt-48
            xl:px-52 lg:px-32 md:px-32 sm:px-16 px-8 ">
            <div className="text-left">
                <h3 className="mt-4 mb-4 lg:mb-8 text-2xl lg:text-2xl font-bold tracking-tight text-gray-500">Page not found</h3>
                <h1 className="text-7xl lg:text-9xl font-semibold ">404</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
            </div>
            <div>
                <img src="/src/assets/images/404.jpeg" alt="404 not found" className=" max-w-lg" />
            </div>
        </section>
    </>
}

export default ErrorPage;