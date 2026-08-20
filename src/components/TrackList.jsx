import Track from "./Track";

function TrackList (props) {
    return (
        <div className="track-list">
            {props.tracks.map((track) => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={props.onAdd}
                    />
                )
            })}
        </div>
    );
}

export default TrackList;