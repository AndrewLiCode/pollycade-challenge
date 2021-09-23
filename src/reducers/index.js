import * as actionTypes from '../actions/actionTypes'

const initialState = {
    machines: [],
    loadingMachines: false,
    machine: {},
    loadingMachine: false
}

const getMachinesStart = (state, action) => {
    return {...state, loadingMachines: true};
}

const getMachinesSuccess = (state, action) => {
    return {...state, machines: action.machines, loadingMachines: false};
}

const getMachinesFail = (state, action) => {
    return {...state, loadingMachines: false};
}

const getMachineStart = (state, action) => {
    return {...state, loadingMachine: true};
}

const getMachineSuccess = (state, action) => {
    return {...state, machine: action.machine, loadingMachine: false};
}

const getMachineFail = (state, action) => {
    return {...state, loadingMachine: false};
}

const updateMachineSuccess = (state, action) => {
    const newMachines = state.machines.map(m => {
        if(m.id !== action.machineid) return m;
        return action.machine;
    });

    return {...state, machine: action.machine, machines: newMachines};
}

const updateHealthState = (state, action) => {
    const newMachines = state.machines.map(m => {
        if(m.id !== action.machineid) {
            return m;
        }

        return {...m, health: action.health};
    });

    const newMachine = 
        state.machine.id === action.machineid
            ? {...state.machine, health: action.health}
            : state.machine;

    return {
        ...state,
        machines: newMachines,
        machine: newMachine
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_MACHINES_START:
            return getMachinesStart(state, action);
        case actionTypes.GET_MACHINES_SUCCESS:
            return getMachinesSuccess(state, action);
        case actionTypes.GET_MACHINES_FAIL:
            return getMachinesFail(state, action);
        case actionTypes.GET_MACHINE_START:
            return getMachineStart(state, action);
        case actionTypes.GET_MACHINE_SUCCESS:
            return getMachineSuccess(state, action);
        case actionTypes.GET_MACHINE_FAIL:
            return getMachineFail(state, action);
        case actionTypes.UPDATE_MACHINE_SUCCESS:
            return updateMachineSuccess(state, action);
        case actionTypes.UPDATE_HEALTH_STATE:
            return updateHealthState(state, action);
        default:
            return state;
    }
}

export default reducer;