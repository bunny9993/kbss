import { useState, useEffect } from 'react'
import './Birthday.css'

function Birthday() {
  const [showBalloons, setShowBalloons] = useState(true);
  const [showCakeText, setShowCakeText] = useState(false);
  const [numBalloons] = useState(30);
  const [numConfetti] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCakeText(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const balloons = Array.from({ length: numBalloons }, (_, i) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    return (
      <div
        key={i}
        className="balloon"
        style={{
          left: Math.random() * 100 + '%',
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          animationDelay: Math.random() * 2 + 's',
          animationDuration: (5 + Math.random() * 3) + 's'
        }}
      >
        <div className="balloon-string"></div>
      </div>
    );
  });

  const confetti = Array.from({ length: numConfetti }, (_, i) => (
    <div
      key={i}
      className="confetti-piece"
      style={{
        left: Math.random() * 100 + '%',
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
        animationDelay: Math.random() * 0.5 + 's',
        animationDuration: (2 + Math.random() * 1) + 's'
      }}
    />
  ));

  return (
    <div className="birthday-container">
      <div className="balloons-container">
        {balloons}
      </div>

      <div className="confetti-container">
        {confetti}
      </div>

      <div className="birthday-content">
        <div className="cake-emoji">🎂</div>
        
        {showCakeText && (
          <div className="birthday-text">
            <h1 className="birthday-title">🎉 Happy Birthday! 🎉</h1>
            <p className="birthday-subtitle">Wishing you a day full of joy and happiness</p>
            
            <div className="image-container">
              <img 
                src="/assets/img/kbss.jpeg" 
                alt="Birthday celebration" 
                className="birthday-image"
              />
            </div>

            <div className="birthday-message">
              <p>May all your wishes come true!</p>
              <p>Cheers to another wonderful year ahead! 🥳</p>
            </div>
          </div>
        )}
      </div>

      <div className="sparkles">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's'
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}

export default Birthday;
