// Import

// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

// Action Creator

export const startTimer = () => {
  return {
    type: START_TIMER
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

export const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// Reducer

const TIMER_DURAION = 1500;

export interface IState {
  isPlaying: boolean;
  lapTime: number;
  timerDuration: number;
}

const initialState: IState = {
  isPlaying: false,
  lapTime: 59,
  timerDuration: TIMER_DURAION
};

// 모든 Action들은 reducer에게로 온다
// 클릭하면 Action이 실행되고
// Action이 실행되면 Reducer Function이 작동됨
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// Reducer Functions

const applyStartTimer = (state: IState) => {
  return {
    // 지금까지의 state
    ...state,
    isPlaying: true
  };
};

const applyRestartTimer = (state: IState) => {
  return {
    ...state,
    isPlaying: false,
    lapTime: 0
  };
};

const applyAddSecond = (state: IState) => {
  if (state.lapTime < TIMER_DURAION) {
    return {
      ...state,
      lapTime: state.lapTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
};

// Export Action Creator
export const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

// Export Reducer

export default reducer;
