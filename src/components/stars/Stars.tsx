function Stars() {
  const starsArray = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div>
      {starsArray.map((star) => {
        return (
          <span
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            key={star}
          ></span>
        );
      })}
    </div>
  );
}

export default Stars;
