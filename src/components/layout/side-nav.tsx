import { Link } from "@tanstack/react-router"

export default function SideNav() {
  return (
    <aside>
      <nav>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link
          to="/login"
          search={{ redirect: "/" }}
          className="[&.active]:font-bold"
        >
          Login
        </Link>
        <Link to="/employees" className="[&.active]:font-bold">
          Employees
        </Link>
      </nav>
    </aside>
  )
}
