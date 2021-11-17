const LibraryItem = ({ track, setcurrentTrack }) => {
  const handleSelectTrack = () => {
    setcurrentTrack(track);
  };
  return (
    <div className="library-item" onClick={handleSelectTrack}>
      <div className="library-item__img-container">
        <img src={track.cover} alt={track.title} />
      </div>
      <div className="library-item__description">
        <h3>{track.title}</h3>
        <h4>{track.artist}</h4>
      </div>
    </div>
  );
};

export default LibraryItem;
