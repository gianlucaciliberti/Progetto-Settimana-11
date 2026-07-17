import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRock, getPop, getHipHop } from "../redux/actions";

function HomePage() {
    const dispatch = useDispatch();

    const {
        rock,
        pop,
        hipHop
    } = useSelector(
        state => state.home
    );

    useEffect(() => {
        dispatch(getRock());
        dispatch(getPop());
        dispatch(getHipHop());
    }, []);

    return (
        <div className="p-4 text-white">
            <h1 className="text-white mb-4">
                Home
            </h1>

            <section className="mb-5">
                <h2 className="text-white mb-3">
                    Hip Hop
                </h2>
                <Row className="g-4">
                    {
                        hipHop.map(album => (
                            <Col xs={6} sm={4} md={3} className="d-flex justify-content-center"
                                key={album.id}
                            >
                                <AlbumCard album={album} />
                            </Col>
                        ))
                    }
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="text-white mb-3">
                    Rock Classics
                </h2>

                <Row className="g-4">
                    {
                        rock.map(album => (
                            <Col xs={6} sm={4} md={3} className="d-flex justify-content-center"
                                key={album.id}
                            >
                                <AlbumCard album={album} />
                            </Col>
                        ))
                    }
                </Row>
            </section>

            <section>
                <h2 className="text-white mb-3">
                    Pop Culture
                </h2>

                <Row className="g-4">
                    {
                        pop.map(album => (
                            <Col xs={6} sm={4} md={3} className="d-flex justify-content-center"
                                key={album.id}
                            >
                                <AlbumCard album={album} />
                            </Col>
                        ))
                    }
                </Row>
            </section>
        </div>
    )
}
export default HomePage;