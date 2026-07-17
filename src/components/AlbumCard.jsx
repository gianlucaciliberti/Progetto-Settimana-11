import { Card } from "react-bootstrap";

function AlbumCard({ album }) {

    return (
        <div className="album-card text-center">
            <img
                src={album.album.cover_medium}
                alt={album.title}
                className="album-image"
            />

            <h6 className="mt-2 mb-0 text-white">
                {album.title}
            </h6>

            <small className="text-white-50">
                {album.artist.name}
            </small>
        </div>
    )
}
export default AlbumCard;