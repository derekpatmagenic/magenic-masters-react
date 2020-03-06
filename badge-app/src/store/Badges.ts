import Badge from "../models/Badge";
import ReduxAction, { ReduxActionType } from "./ReduxAction";

export interface ReduxBadgesState {
    allCorpBadges: Array<Badge>
}

const initialState: ReduxBadgesState = {
    allCorpBadges: []
}

export interface ReduxAddBadgePayload {
    badge: Badge;
}

export interface ReduxAddBadgeAction extends ReduxAction {
    type: ReduxActionType.ADD_BADGE,
    payload: ReduxAddBadgePayload
}

export interface ReduxLoadAllBadgesPayload {
    allCorpBadges: Array<Badge>;
}

export interface ReduxLoadAllBadgesAction extends ReduxAction {
    type: ReduxActionType.LOAD_ALL_BADGES,
    payload: ReduxLoadAllBadgesPayload
}

export function loadAllBadges(): ReduxLoadAllBadgesAction {
    const allCorpBadges: Array<Badge> = initialState.allCorpBadges;
    return {
        type: ReduxActionType.LOAD_ALL_BADGES,
        payload: { allCorpBadges: allCorpBadges }
    }
}

export function addBadge(badge: Badge): ReduxAddBadgeAction {
    return {
        type: ReduxActionType.ADD_BADGE,
        payload: { badge: badge }
    };
}

type TBadgeReducerActions = ReduxAddBadgeAction | ReduxLoadAllBadgesAction;

export const reducer = (
    state: ReduxBadgesState = initialState,
    action: TBadgeReducerActions
) => {
    switch(action.type) {
        case ReduxActionType.LOAD_ALL_BADGES:
            return { ...state, allCorpBadges: action.payload.allCorpBadges };
        case ReduxActionType.ADD_BADGE:
            state.allCorpBadges.push(action.payload.badge);
            return { ...state, allCorpBadges: state.allCorpBadges };
        default:
            return state;
    }
}