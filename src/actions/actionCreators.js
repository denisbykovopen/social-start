import axios from 'axios';
import ACTION from './actionTypes';

const getConfigDataLoading = () => ({
  type: ACTION.GET_CONFIG_DATA_LOADING,
});

const getConfigDataSuccess = configData => ({
  type: ACTION.GET_CONFIG_DATA_SUCCESS,
  configData,
});

const getConfigDataFailure = error => ({
  type: ACTION.GET_CONFIG_DATA_FAILURE,
  error,
});

export const getConfigData = () => (dispatch, getState) => {
  const {
    catalog: { configData },
  } = getState();
  if (Object.keys(configData).length !== 0) return;

  dispatch(getConfigDataLoading());
  axios
    .get('http://3.225.23.38/api/event/constructor')
    .then(({ data: { constructor: { parameters } } }) => {
      const configData = {
        sexes: {
          label: parameters[3].label,
          element_name: parameters[3].element_name,
          values: Object.values(parameters[3].values),
        },
        age: {
          label: parameters[4].label,
          element_name: parameters[4].element_name,
        },
        breeds: {
          label: parameters[5].label,
          element_name: parameters[5].element_name,
          values: Object.values(parameters[5].values),
        },
        groups: {
          label: parameters[6].label,
          element_name: parameters[6].element_name,
          values: Object.values(parameters[6].values),
        },
      };
      dispatch(getConfigDataSuccess(configData));
    })
    .catch(err => dispatch(getConfigDataFailure(err.message)));
};

export const sortBreedsByPopular = () => ({
  type: ACTION.SORT_BREEDS_BY_POPULAR,
});

export const sortBreedsByAlphabet = () => ({
  type: ACTION.SORT_BREEDS_BY_ALPHABET,
});

export const configBreed = breed => ({
  type: ACTION.CONFIG_BREED,
  breed,
});

export const configGoal = goal => ({
  type: ACTION.CONFIG_GOAL,
  goal,
});

export const configSex = sex => ({
  type: ACTION.CONFIG_SEX,
  sex,
});

export const configAge = age => ({
  type: ACTION.CONFIG_AGE,
  age,
});

export const configRegistration = registration => ({
  type: ACTION.CONFIG_REGISTRATION,
  registration,
});

export const addConfigData = configData => ({
  type: ACTION.ADD_CONFIG_DATA,
  configData,
});
