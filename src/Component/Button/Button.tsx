import React from 'react';
import styled from 'styled-components';

const Btn = styled.img`
  width: 100px;
  height: 100px;
`;

const Button: React.FC<any> = (props) => {
  const { src, onStartTimer, onRestartTimer, isPlaying } = props;
  return (
    <>
      {isPlaying ? (
        <Btn onClick={onRestartTimer} src={src} />
      ) : (
        <Btn onClick={onStartTimer} src={src} />
      )}
    </>
  );
};

export default Button;
