import TrackList from "./TrackList";

function Playlist (props) {
    return (
        <div className="playlist">
            <h2>{props.playlistName}</h2>
            <TrackList 
                tracks={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            />
        </div>
    );
}

export default Playlist;