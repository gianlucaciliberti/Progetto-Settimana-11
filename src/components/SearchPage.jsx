import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchMusic } from "../redux/actions";

import { Row, Col } from "react-bootstrap";

import AlbumCard from "./AlbumCard";

function SearchPage() {
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");

    const results = useSelector(
        state => state.search.results
    );

    const handleSearch = () => {
        if (query.trim() !== "") {
            dispatch(
                searchMusic(query)
            );
        }
    }
    return (
        <div className="page-background p-4 text-white">
            <h1>
                Search
            </h1>
            <div className="d-flex gap-2 mb-5">
                <input className="form-control" value={query} onChange={(e)=>
                    setQuery(e.target.value)
                } placeholder="Cerca artista..."></input>
                <button className="btn btn-success" onClick={handleSearch}>Cerca</button>
            </div>

            <h2>Search Results</h2>
            <Row className="g-4">
                {results.map(album=>(
                    <Col xs={6} sm={4} md={3} 
                    key={album.id} className="d-flex justify-content-center">
                        <AlbumCard album={album}/>
                    </Col>
                ))}
            </Row>
        </div>

    )
}
export default SearchPage;