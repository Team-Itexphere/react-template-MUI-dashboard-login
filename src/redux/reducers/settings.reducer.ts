interface SettingsState {
    time: string; // Expect a string now
    color: string;
}
const getInitialTime = () => {
    const now = new Date();
    now.setHours(9, 0, 0, 0);
    return now.toISOString();
};

export const settingInitialState: SettingsState = {
    time: getInitialTime(),
    color: '#000000',
};

const settingReducer = (state: SettingsState = settingInitialState, action: any) => {
    switch (action.type) {
        case 'SET_DEFAULT_TIME':
            return {
                ...state,
                time: action.payload,
            };
        case 'SET_DEFAULT_COLOR':
            return {
                ...state,
                color: action.payload,
            };
        default:
            return state;
    }
};

export default settingReducer;
