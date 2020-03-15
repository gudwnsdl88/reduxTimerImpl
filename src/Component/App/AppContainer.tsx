import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, restartTimer, addSecond, IState } from '../../reducer';

const AppContainer: React.FC = () => {
  const getState = useSelector((state: IState) => state);

  const dispatch = useDispatch();

  const onStartTimer = () => {
    dispatch(startTimer());
  };

  const onRestartTimer = () => {
    dispatch(restartTimer());
  };

  const onAddSecond = () => {
    dispatch(addSecond());
  };

  useEffect(() => {
    // 실행중이면 인터벌 삭제함
    if (getState.isPlaying) {
      console.log('인터벌 생성');
      // 그렇지않다면 인터벌 생성함
      // 콜백실행되고 1초 텀을 두는거지
      const timeInterval = setInterval(() => {
        onAddSecond();
      }, 1000);

      return () => {
        clearInterval(timeInterval);
      };
    }
  });

  return (
    <AppPresenter
      onStartTimer={onStartTimer}
      onRestartTimer={onRestartTimer}
      onAddSecond={onAddSecond}
      getState={getState}
    />
  );
};

export default AppContainer;
