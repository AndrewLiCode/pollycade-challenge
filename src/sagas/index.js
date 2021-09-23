import {takeLatest, put} from 'redux-saga/effects'
import axios from 'axios'

import * as actionTypes from '../actions/actionTypes'
import * as actions from '../actions'

export function* getMachine(action) {
    yield put(actions.getMachineStart());

    try {
        const response = yield axios.get(`/machines/${action.machineid}`);
        console.log(response);
        yield put(actions.getMachineSuccess(response.data));
    } catch(err){
        yield put(actions.getMachineFail(err));
    }
}

export function* getMachines(action) {
    yield put(actions.getMachinesStart());

    try{
        const response = yield axios.get("/machines");
        yield put(actions.getMachinesSuccess(response.data));
    } catch(err) {
        yield put(actions.getMachinesFail(err));
    }
}

export function* updateMachine(action) {
    try {
        axios.put(`/machines/${action.machineid}`, action.machine);
        yield put(
            actions.updateMachineSuccess(action.machineid, action.machine)
        );
    } catch (err) {
        yield put(actions.updateMachineFail(err));
    }
}

export function* watchMachines() {
    yield takeLatest(actionTypes.GET_MACHINE, getMachine);
    yield takeLatest(actionTypes.GET_MACHINES, getMachines);
    yield takeLatest(actionTypes.UPDATE_MACHINE, updateMachine)
}