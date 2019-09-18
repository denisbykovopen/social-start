import ACTION from '../actions/actionTypes';

const initialState = {
  breed: 1,
  goal: 'sdf',
  sex: 3,
  age: {
    min: 1,
    max: 3,
  },
  registration: '',
  configData: {},
  loading: true,
  error: '',
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case ACTION.CONFIG_BREED:
      return { ...state, breed: payload.breed };
    case ACTION.CONFIG_GOAL:
      return { ...state, goal: payload.goal };
    case ACTION.CONFIG_SEX:
      return { ...state, sex: payload.sex };
    case ACTION.CONFIG_AGE:
      return { ...state, age: payload.age };
    case ACTION.CONFIG_REGISTRATION:
      return { ...state, registration: payload.registration };
    case ACTION.GET_CONFIG_DATA_LOADING:
      return { ...state, loading: true };
    case ACTION.GET_CONFIG_DATA_SUCCESS:
      return {
        ...state,
        configData: payload.configData,
        error: '',
        loading: false,
      };
    case ACTION.GET_CONFIG_DATA_FAILURE:
      return {
        ...state,
        configData: {},
        error: payload.error,
        loading: false,
      };
    case ACTION.SORT_BREEDS_BY_POPULAR:
      return {
        ...state,
        configData: {
          ...state.configData,
          breeds: {
            ...state.configData.breeds,
            values: state.configData.breeds.values.sort(
              (a, b) => a.rate - b.rate,
            ),
          },
        },
      };
    case ACTION.SORT_BREEDS_BY_ALPHABET:
      return {
        ...state,
        configData: {
          ...state.configData,
          breeds: {
            ...state.configData.breeds,
            values: state.configData.breeds.values.sort((a, b) =>
              a.name.localeCompare(b.name),
            ),
          },
        },
      };
    default:
      return state;
  }
};
