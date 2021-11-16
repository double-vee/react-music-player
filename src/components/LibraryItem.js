const LibraryItem = ({ track }) => {
  return (
    <div className="library-item">
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
