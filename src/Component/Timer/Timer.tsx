import React from 'react';
import styled from 'styled-components';

const TimerDiv = styled.div`
  color: white;
  font-weight: bold;
  font-size: 100pt;
  margin-bottom: 300px;
`;

const Timer: React.FC<any> = (props) => {
  const { lapTime } = props;

  const min = Math.floor(lapTime / 60);
  const sec = lapTime - min * 60;

  let format = `${min} : ${sec}`;

  if (min < 10 && sec < 10) {
    format = `0${min} : 0${sec}`;
  } else if (min < 10 && sec >= 10) {
    format = `0${min} : ${sec}`;
  } else if (min > 10 && sec < 10) {
    format = `${min} : 0${sec}`;
  } else if (min < 10 && sec < 10) {
    format = `${min} : ${sec}`;
  }

  console.log(format);
  return <TimerDiv>{format}</TimerDiv>;
};

export default Timer;
