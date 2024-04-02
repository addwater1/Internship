import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={'/document'}>Home</Link>
      <Outlet />
    </div>
  )
}