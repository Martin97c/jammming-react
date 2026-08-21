function Track (props) {
    return (
        <div className="track">

            {props.isRemoval ? (
                <button onClick={() => props.onRemove(props.track)}>
                    -
                </button>
            ) : (    
                <button onClick={() => props.onAdd(props.track)}>
                    +
                </button>
            )}

            <h2>{props.track.name}</h2>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    );
}

export default Track;