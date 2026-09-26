function VideoBackground() {
  return (
    <video autoPlay muted loop playsInline className="video-bg">
      <source src="/background.mp4" type="video/mp4" />
    </video>
  );
}

export default VideoBackground;