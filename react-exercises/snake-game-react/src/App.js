import React, {useState, useEffect} from 'react';
import './App.css';

//<TODO> Only basic functionality implemented. It requires few more changes to handle all scenarios.

function App() {
  const [xFoodPosition, setXFoodPosition] = useState(Math.floor(Math.random() * 400));
  const [yFoodPosition, setYFoodPosition] = useState(Math.floor(Math.random() * 400));
  const [xSnakePosition, setXSnakePosition] = useState(0);
  const [ySnakePosition, setYSnakePosition] = useState(0);
  const [direction, setDirection] = useState('bottom');

  useEffect(() => {

    const onKeyDown = ({ key }) => {
      if(key === "ArrowDown") {
        setDirection('bottom');
      } else if(key === "ArrowUp") {
        setDirection('top');
      } else if(key === "ArrowRight") {
        setDirection('right');
      } else if(key === "ArrowLeft") {
        setDirection('left');
      } 
    }

    document.addEventListener('keydown', onKeyDown);
    let interval = setInterval(() => {
      if(direction === 'bottom') {
        setYSnakePosition(ySnakePosition => ySnakePosition + 10);
      } else if(direction === 'top') {
        setYSnakePosition(ySnakePosition => ySnakePosition - 10);
      } else if(direction === 'left') {
        setXSnakePosition(xSnakePosition => xSnakePosition - 10);
      } else if(direction === 'right') {
        setXSnakePosition(xSnakePosition => xSnakePosition + 10);
      }
    }, 300);

    // if difference between X and Y is less than 20 -> Game over

    if(ySnakePosition >= 370) {
      clearInterval(interval);
    }
    if(xSnakePosition >= 370) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [ySnakePosition, direction, xSnakePosition, yFoodPosition, xFoodPosition]);

  return (
    <div>
      <div className="title"><span>Snake Game</span></div>
      <div className="game-container">
        <div className="food item" style={{left : xFoodPosition, top: yFoodPosition}}></div>
        <div className="snake item" style={{left : xSnakePosition, top: ySnakePosition}}></div>
      </div>
    </div>
  );
}

export default App;