import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../redux/actions";

function AlbumCard({ album }) {
    const dispatch = useDispatch();

    return (
        <div className="album-card text-center" onClick={()=>dispatch(setCurrentTrack(album))}>
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