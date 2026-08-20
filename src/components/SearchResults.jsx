import TrackList from "./TrackList";

function SearchResults (props) {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            <TrackList 
                tracks={props.searchResults}
                onAdd={props.onAdd}
            />
        </div>
    );
}

export default SearchResults;