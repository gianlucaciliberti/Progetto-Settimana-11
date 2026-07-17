import { useSelector } from "react-redux";

function Player() {

    const currentTrack = useSelector(
        state => state.player.currentTrack
    );
    return (
        <footer className="player">
            {
                currentTrack ? (
                    <>
                        <div className="player-left">
                            <img
                                src={currentTrack.album.cover_small}
                                alt={currentTrack.title}
                            />
                            <div>
                                <p>{currentTrack.title}</p>
                                <small>{currentTrack.artist.name}</small>
                            </div>
                        </div>

                        <div className="player-center">
                            <i className="bi bi-shuffle"></i>
                            <i className="bi bi-skip-backward-fill"></i>
                            <i className="bi bi-play-circle-fill"></i>
                            <i className="bi bi-skip-forward-fill"></i>
                            <i className="bi bi-repeat"></i>
                        </div> 

                        <div className="player-right">
                            <i className="bi bi-volume-up-fill"></i>
                        </div>
                    </>
                ) : (
                    <p className="text-secondary">
                        Seleziona una canzone
                    </p>
                )
            }
        </footer>
    )
}
export default Player;