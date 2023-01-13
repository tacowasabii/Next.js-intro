import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" style={{ textDecoration: "none" }}>
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about" style={{ textDecoration: "none" }}>
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      <style jsx>{`
        /* nav {
          background-color: tomato;
        } */
        /* link {
          text-decoration: none:
        } */
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
