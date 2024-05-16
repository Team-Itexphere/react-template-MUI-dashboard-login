import { combineReducers } from 'redux';
import settingReducer, { settingInitialState } from './settings.reducer';
import { RootState } from 'redux/store';

export const initialState: RootState = {
    settingsStore: settingInitialState,
};

export default combineReducers({
    settingsStore: settingReducer,
});