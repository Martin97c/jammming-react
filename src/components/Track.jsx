function Track (props) {
    return (
        <div className="track">
            <button onClick={() => props.onAdd(props.track)}>
                +
            </button>
            <h2>{props.track.name}</h2>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    );
}

export default Track;