function Particles() {
  return (
    <div className="particles">
      {[...Array(25)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}

export default Particles;