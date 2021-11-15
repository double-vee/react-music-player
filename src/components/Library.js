import LibraryItem from "./LibraryItem";

const Library = ({ tracks }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library__items">
        {tracks.map((track) => (
          <LibraryItem key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Library;
