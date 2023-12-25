import { Outlet } from "react-router-dom"
import Header from "./utils/components/header/header"

function App() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Header />
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App
