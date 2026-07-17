import { Link } from "react-router-dom";

function Sidebar({ menuOpen, setMenuOpen }) {
    return (
        <aside
            className={`sidebar p-3 d-flex flex-column ${menuOpen ? "sidebar-open" : ""
                }`}>
            <h3 className="spotify-logo mb-4">
                <i className="bi bi-spotify me-2"></i> Spotify
            </h3>

            <nav className="d-flex flex-column gap-3">
                <Link
                    to="/" onClick={()=>setMenuOpen(false)}
                    className="sidebar-link text-decoration-none"
                >
                <i className="bi bi-house-door-fill me-2"></i> Home
                </Link>

                <Link
                    to="/search" onClick={()=>setMenuOpen(false)}
                    className="sidebar-link text-decoration-none"
                >
                <i className="bi bi-search me-2"></i>Search
                </Link>

                <a href="#" className="text-decoration-none text-white" ><i className="bi bi-collection-fill me-2"></i>Your Library</a>

            </nav>

            <div className="mt-auto">
                <button
                    className="btn btn-success w-100 mb-2"><i className="bi bi-person-plus me-2"></i>Sign Up</button>

                <button
                    className="btn btn-outline-light w-100"><i className="bi bi-box-arrow-in-right me-2"></i>Login</button>

                <div className="mb-3 d-flex gap-3">
                    <a
                        href="#"
                        className="text-secondary text-decoration-none small">Cookie</a>

                    <a
                        href="#"
                        className="text-secondary text-decoration-none small">Privacy</a>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar;