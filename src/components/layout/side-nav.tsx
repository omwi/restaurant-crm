import { Link } from "@tanstack/react-router"

export default function SideNav() {
  return (
    <aside>
      <nav>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/login" className="[&.active]:font-bold">
          Login
        </Link>
      </nav>
    </aside>
  )
}
