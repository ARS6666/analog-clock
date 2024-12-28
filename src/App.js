import './App.css';
import { useEffect } from 'react';

function Clock({ timeZone }) {
  useEffect(() => {
    const hourHand = document.getElementById(`hour-hand-${timeZone}`);
    const minuteHand = document.getElementById(`minute-hand-${timeZone}`);
    const secondHand = document.getElementById(`second-hand-${timeZone}`);

    function getTimeInTimeZone(timeZone) {
      const data = new Date();
      return new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).formatToParts(data).reduce((acc, part) => {
        if (part.type !== 'literal') {
          acc[part.type] = part.value;
        }
        return acc;
      }, {});
    }

    function updateClock() {
      const time = getTimeInTimeZone(timeZone);
      const hour = parseInt(time.hour, 10);
      const minute = parseInt(time.minute, 10);
      const second = parseInt(time.second, 10);

      const seconds = second / 60;
      const minutes = (seconds + minute) / 60;
      const hours = (minutes + hour) / 12;

      rotateClockHand(secondHand, seconds);
      rotateClockHand(minuteHand, minutes);
      rotateClockHand(hourHand, hours);
    }

    function rotateClockHand(element, rotation) {
      element.style.setProperty('--rotate', rotation * 360);
    }

    updateClock();
    setInterval(updateClock, 1000);
  }, [timeZone]);

  return (<>
    <div className="clock">
      <div className="number" style={{ '--n': 1 }}><b>1</b></div>
      <div className="number" style={{ '--n': 2 }}><b>2</b></div>
      <div className="number" style={{ '--n': 3 }}><b>3</b></div>
      <div className="number" style={{ '--n': 4 }}><b>4</b></div>
      <div className="number" style={{ '--n': 5 }}><b>5</b></div>
      <div className="number" style={{ '--n': 6 }}><b>6</b></div>
      <div className="number" style={{ '--n': 7 }}><b>7</b></div>
      <div className="number" style={{ '--n': 8 }}><b>8</b></div>
      <div className="number" style={{ '--n': 9 }}><b>9</b></div>
      <div className="number" style={{ '--n': 10 }}><b>10</b></div>
      <div className="number" style={{ '--n': 11 }}><b>11</b></div>
      <div className="number" style={{ '--n': 12 }}><b>12</b></div>
      <div className="hour-hand" id={`hour-hand-${timeZone}`}></div>
      <div className="minute-hand" id={`minute-hand-${timeZone}`}></div>
      <div className="second-hand" id={`second-hand-${timeZone}`}></div>
      <div className="center-dot"></div>
    </div>
    <h3>timeZone : {timeZone}</h3>
  </>
  );
}

function App() {
  const timeZones = [
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Asia/Tehran"
  ];

  return (
    <>
      {timeZones.map((timeZone, index) => (
        <Clock key={index} timeZone={timeZone} />
      ))}
    </>
  );
}

export default App;
