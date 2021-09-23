import * as actionTypes from './actionTypes'

export const getMachines = () => ({
    type: actionTypes.GET_MACHINES
})

export const getMachinesStart = () => ({
    type: actionTypes.GET_MACHINES_START
})

export const getMachinesSuccess = machines => ({
    type: actionTypes.GET_MACHINES_SUCCESS,
    machines
})

export const getMachinesFail = error => ({
    type: actionTypes.GET_MACHINES_FAIL,
    error
})

export const getMachine = machineid => ({
    type: actionTypes.GET_MACHINE,
    machineid
})

export const getMachineStart = () => ({
    type: actionTypes.GET_MACHINE_START
})

export const getMachineSuccess = machine => ({
    type: actionTypes.GET_MACHINE_SUCCESS,
    machine
})

export const getMachineFail = error => ({
    type: actionTypes.GET_MACHINE_FAIL,
    error
})

export const updateMachine = (machineid, machine) => ({
    type: actionTypes.UPDATE_MACHINE,
    machineid,
    machine
})

export const updateMachineSuccess = (machineid, machine) => ({
    type: actionTypes.UPDATE_MACHINE_SUCCESS,
    machineid,
    machine
})

export const updateMachineFail = machineid => ({
    type: actionTypes.UPDATE_MACHINE_FAIL,
    machineid
})

export const updateHealthState = (machineid, health) => ({
    type: actionTypes.UPDATE_HEALTH_STATE,
    machineid,
    health
})