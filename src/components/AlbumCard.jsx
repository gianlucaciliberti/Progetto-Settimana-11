import { Card } from "react-bootstrap";

function AlbumCard({ album }) {
    return (
        <Card 
            className="bg-dark text-white border-0 h-100 album-card"
        >
            <Card.Img
                variant="top"
                src={album.album.cover_medium}
            />

            <Card.Body>
                <Card.Title className="fs-6">
                    {album.title}
                </Card.Title>

                <Card.Text className="text-secondary small">
                    {album.artist.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default AlbumCard;