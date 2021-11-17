import LibraryItem from "./LibraryItem";

const Library = ({ tracks, setcurrentTrack }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library__items">
        {tracks.map((track) => (
          <LibraryItem
            key={track.id}
            track={track}
            setcurrentTrack={setcurrentTrack}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
