import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
        <h2>Page not found</h2>
        <Link className="mt-5 bg-blue-500 text-white text-lg text-bold px-4 py-2 rounded-md shadow-md shadow-gray-200" to="/">Go to home</Link>
    </div>
  )
}

export default NotFound