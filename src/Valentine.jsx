import { useState } from 'react'

function Valentine() {
  const WIFE_NAME = "Bindu";
  const MOVE_MS = 140;

  const [showAskCard, setShowAskCard] = useState(true);
  const [showYayCard, setShowYayCard] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonText, setNoButtonText] = useState("NO");
  const [evasionStarted, setEvasionStarted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ left: '50%', top: '50%' });
  const [lastNoTextIndex, setLastNoTextIndex] = useState(-1);

  const funnyNoTexts = [
    "This could be a mistake!",
    "Think again 😶‍🌫️",
    "Don't do this to me 💔",
    "Give it another thought!",
    "You might regret this!",
    "Really sure ?",
    "Surely not!",
    "Last chance! 😬",
    "Are you absolutely certian? 🙅‍♂️",
    "I will cry 😭",
    "Please no 🥺",
  ];

  const isMobileLike = () => {
    const coarsePointer = matchMedia("(pointer: coarse)").matches;
    const noHover = matchMedia("(hover: none)").matches;
    const smallViewport = Math.min(window.innerWidth, window.innerHeight) <= 768;
    return (coarsePointer && noHover) || smallViewport;
  };

  const setFunnyNoText = () => {
    let idx = Math.floor(Math.random() * funnyNoTexts.length);
    if (idx === lastNoTextIndex) {
      idx = (idx + 1) % funnyNoTexts.length;
    }
    setLastNoTextIndex(idx);
    setNoButtonText(funnyNoTexts[idx]);

    setTimeout(() => {
      if (!evasionStarted) setNoButtonText("NO");
    }, 1200);
  };

  const moveNoRandom = () => {
    const noSlot = document.getElementById("noSlot");
    const noBtn = document.getElementById("noBtn");
    
    if (!noSlot || !noBtn) return;

    const bounds = noSlot.getBoundingClientRect();
    const bw = bounds.width;
    const bh = bounds.height;

    const br = noBtn.getBoundingClientRect();
    const w = br.width;
    const h = br.height;

    if (!evasionStarted) {
      setEvasionStarted(true);
    }

    const maxX = Math.max(0, bw - w);
    const maxY = Math.max(0, bh - h);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setNoButtonPosition({ left: `${x}px`, top: `${y}px` });
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    moveNoRandom();
    if (isMobileLike()) {
      setFunnyNoText();
    }
  };

  const handleNoMouseEnter = (e) => {
    e.preventDefault();
    moveNoRandom();
    setFunnyNoText();
  };

  const handleYesClick = () => {
    setShowAskCard(false);
    setShowYayCard(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 7000);
  };

  return (
    <>
      <div className="hearts" aria-hidden="true">
        {Array.from({ length: 22 }, (_, i) => {
          const heartEmojis = ["💗", "💖", "💞", "💕", "💘"];
          return (
            <span
              key={i}
              className="heart"
              style={{
                left: Math.random() * 100 + "vw",
                animationDuration: (7 + Math.random() * 9) + "s",
                animationDelay: (-Math.random() * 10) + "s",
                fontSize: (16 + Math.random() * 16) + "px"
              }}
            >
              {heartEmojis[Math.floor(Math.random() * heartEmojis.length)]}
            </span>
          );
        })}
      </div>

      <div className="wrap">
        {showAskCard && (
          <div className="card" id="askCard">
            <div className="banner"></div>
            <h1>
              <span className="name">{WIFE_NAME}</span>,<br />will you be my Valentine?
              <span className="tiny-hearts" aria-hidden="true">
                <span>💗</span><span>💞</span>
              </span>
            </h1>
            <p className="sub">Choose wisely. (The "No" button is… shy.)</p>

            <div className="row" id="playground">
              <div className="yes-slot">
                <button className="yes" id="yesBtn" onClick={handleYesClick}>YES</button>
              </div>

              <div className="no-slot" id="noSlot">
                <button
                  className={`no ${evasionStarted ? 'evading' : ''}`}
                  id="noBtn"
                  onPointerDown={handleNoClick}
                  onMouseEnter={handleNoMouseEnter}
                  style={evasionStarted ? {
                    ...noButtonPosition,
                    transition: `left ${MOVE_MS}ms ease, top ${MOVE_MS}ms ease`
                  } : {}}
                >
                  {noButtonText}
                </button>
              </div>
            </div>
          </div>
        )}

        {showYayCard && (
          <div className="card" id="yayCard">
            <h2 className="yay">💖 YAY!!! 💖</h2>
            <p className="yayline">Best decision ever 😘</p>

            <div className="gifbox">
              <img alt="Celebration" src="/assets/img/New_Girl.png" />
            </div>

            <div className="love">I love you ❤️</div>
          </div>
        )}
      </div>

      {showConfetti && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 80 }, (_, i) => (
            <i
              key={i}
              style={{
                left: (Math.random() * 100) + "vw",
                animationDelay: (Math.random() * 1.2) + "s",
                animationDuration: (1.4 + Math.random() * 1.5) + "s",
                background: `hsl(${Math.floor(Math.random() * 360)} 90% 60%)`
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Valentine;
