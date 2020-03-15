import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Timer from '../Timer/Timer';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Clock = styled.div`
  width: 80%;
  height: 80vh;
  background-color: #ffc9c9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BtnDiv = styled.div``;

const AppPresenter = (props: any) => {
  const { isPlaying, lapTime } = props.getState;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onStartTimer, onRestartTimer, onAddSecond } = props;

  return (
    <MainContainer>
      <Clock>
        <Timer lapTime={lapTime} />
        <BtnDiv>
          {isPlaying ? (
            <Button
              isPlaying={isPlaying}
              onRestartTimer={onRestartTimer}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAyaDIwdjIwaC0yMHoiLz48L3N2Zz4="
            />
          ) : (
            <Button
              isPlaying={isPlaying}
              onStartTimer={onStartTimer}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMyAxN3YtMTBsOSA1LjE0Ni05IDQuODU0eiIvPjwvc3ZnPg=="
            />
          )}
        </BtnDiv>
      </Clock>
    </MainContainer>
  );
};

export default AppPresenter;
