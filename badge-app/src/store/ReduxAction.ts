export enum ReduxActionType {
    ADD_BADGE = 'ADD_BADGE',
    LOAD_ALL_BADGES = 'LOAD_ALL_BADGES',
    LOAD_EARNED_BADGES = 'LOAD_EARNED_BADGES'
}

export default interface ReduxAction {
    type: ReduxActionType
}