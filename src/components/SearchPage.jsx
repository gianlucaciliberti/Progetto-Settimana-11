import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getRock, getPop, getHipHop, searchMusic } from "../redux/actions";

import { Row, Col, Navbar } from "react-bootstrap";

import AlbumCard from "./AlbumCard";
import MyNavbar from "./MyNavbar";

function SearchPage() {
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");

    const results = useSelector(
        state => state.search.results
    );

    const { rock, pop, hipHop } = useSelector(
        state => state.home);

    useEffect(() => {
        if (
            rock.length === 0 &&
            pop.length === 0 &&
            hipHop.length === 0
        ) {
            dispatch(getRock());
            dispatch(getPop());
            dispatch(getHipHop());
        }
    }, []);

    const handleSearch = () => {
        if (query.trim() !== "") {
            dispatch(
                searchMusic(query)
            );
        }
    }

    const renderCategory = (title, albums) => (
        <section className="mt-5">
            <h2 className="mb-4">{title}</h2>
            <Row className="g-4">
                {albums.map(album => (
                    <Col xs={6} sm={4} md={3}
                        key={album.id} className="d-flex justify-content-center">
                        <AlbumCard album={album} />
                    </Col>
                ))}
            </Row>
        </section>
    )
    return (
        <div className="page-background p-4 text-white">
            <MyNavbar />
            <div className="d-flex gap-2 mb-5">
                <input className="form-control" value={query} onChange={(e) =>
                    setQuery(e.target.value)
                } placeholder="Cerca artista..."></input>
                <button className="btn btn-success" onClick={handleSearch}>Cerca</button>
            </div>

            {results.length > 0 && (
                <section>
                    <h2 className="mb-4">Search Results</h2>
                    <Row className="g-4">
                        {results.map(album => (
                            <Col xs={6} sm={4} md={3}
                                key={album.id} className="d-flex justify-content-center">
                                <AlbumCard album={album} />
                            </Col>
                        ))}
                    </Row>
                </section>
            )}
            {renderCategory("Hip Hop", hipHop)}
            {renderCategory("Rock Classics", rock)}
            {renderCategory("Pop Culture", pop)}
        </div>

    )
}
export default SearchPage;