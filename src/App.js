import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const Hourhand = document.getElementById("hour-hand")
    const Minutehand = document.getElementById("minute-hand")
    const secondhand = document.getElementById("second-hand")

    function Clocktick() {
      const data = new Date();
      const seconds = data.getSeconds() / 60;
      const minutes = (seconds + data.getMinutes()) / 60;
      const hours = (minutes + data.getHours()) / 12;

      rotateClockHand(secondhand, seconds);
      rotateClockHand(Minutehand, minutes);
      rotateClockHand(Hourhand, hours);
    }

    function rotateClockHand(element, rotation) {
      element.style.setProperty('--rotate', rotation * 360);
    }
    setInterval(Clocktick, 1000)
  }, []);

  return (
    <>
      <div className="clock">
        <div className="number" style={{ '--n': 10 }}><b>1</b></div>
        <div className="number" style={{ '--n': 11 }}><b>2</b></div>
        <div className="number" style={{ '--n': 12 }}><b>3</b></div>
        <div className="number" style={{ '--n': 1 }}><b>4</b></div>
        <div className="number" style={{ '--n': 2 }}><b>5</b></div>
        <div className="number" style={{ '--n': 3 }}><b>6</b></div>
        <div className="number" style={{ '--n': 4 }}><b>7</b></div>
        <div className="number" style={{ '--n': 5 }}><b>8</b></div>
        <div className="number" style={{ '--n': 6 }}><b>9</b></div>
        <div className="number" style={{ '--n': 7 }}><b>10</b></div>
        <div className="number" style={{ '--n': 8 }}><b>11</b></div>
        <div className="number" style={{ '--n': 9 }}><b>12</b></div>
        <div className="hour-hand" id="hour-hand"></div>
        <div className="minute-hand" id="minute-hand"></div>
        <div className="second-hand" id="second-hand"></div>
        <div className="center-dot"></div>
      </div>
    </>
  );
}

export default App;
