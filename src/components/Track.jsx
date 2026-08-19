function Track (props) {
    return (
        <div className="track">
            <h2>{props.track.name}</h2>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    );
}

export default Track;