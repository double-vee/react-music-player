const Track = ({ currentTrack }) => {
  return (
    <div className="track-container">
      <div className="image-container">
        <img src={currentTrack.cover} alt="Album cover" />
      </div>
      <h2>{currentTrack.title}</h2>
      <h3>{currentTrack.artist}</h3>
    </div>
  );
};

export default Track;
