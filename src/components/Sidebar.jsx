import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <aside
            className="bg-dark text-white p-3 d-flex flex-column"
            style={{
                width: "250px",
                height: "100vh"
            }}
        >
            <h3 className="mb-4">
                Spotify Clone
            </h3>

            <nav className="d-flex flex-column gap-3">
                <Link
                    to="/"
                    className="text-white text-decoration-none"
                >
                    🏠 Home
                </Link>

                <Link
                    to="/search"
                    className="text-white text-decoration-none"
                >
                    🔍 Search
                </Link>

                <a href="#" className="text-decoration-none text-white" >📚 Your Library</a>
                
            </nav>

            <div className="mt-auto">
                <button
                    className="btn btn-success w-100 mb-2">Sign Up</button>

                <button
                    className="btn btn-outline-light w-100">Login</button>

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