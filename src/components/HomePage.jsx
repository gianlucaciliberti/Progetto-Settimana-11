import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

function HomePage(){

    return (
        <div className="p-4 text-white">
            <h1 className="text-white mb-4">
                Home
            </h1>

            <section className="mb-5">
                <h2 className="text-white mb-3">
                    Hip Hop
                </h2>
                <Row>
                    <Col md={3}>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
            </section>

            <section className="mb-5">
                <h2 className="text-white mb-3">
                    Rock Classics
                </h2>

                <Row>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                </Row>
            </section>

            <section>
                <h2 className="text-white mb-3">
                    Pop Culture
                </h2>

                <Row>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                </Row>
            </section>
        </div>
    )
}
export default HomePage;