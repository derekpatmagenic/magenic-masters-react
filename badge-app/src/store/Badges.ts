import Badge from "../models/Badge";
import ReduxAction, { ReduxActionType } from "./ReduxAction";
import { BadgeType } from "../enums/BadgeType";

export interface ReduxBadgesState {
    allCorpBadges: Array<Badge>,
    allCommBadges: Array<Badge>
}

const initialState: ReduxBadgesState = {
    allCorpBadges: [],
    allCommBadges: []
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
    allCommBadges: Array<Badge>;
}

export interface ReduxLoadAllBadgesAction extends ReduxAction {
    type: ReduxActionType.LOAD_ALL_BADGES,
    payload: ReduxLoadAllBadgesPayload
}

export function loadAllBadges(): ReduxLoadAllBadgesAction {
    const allCorpBadges: Array<Badge> = initialState.allCorpBadges;
    const allCommBadges: Array<Badge> = initialState.allCommBadges;
    return {
        type: ReduxActionType.LOAD_ALL_BADGES,
        payload: { allCorpBadges: allCorpBadges, allCommBadges: allCommBadges }
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
            if(action.payload.badge.type === BadgeType.Corporate) {
                state.allCorpBadges.push(action.payload.badge);
            }
            else if(action.payload.badge.type === BadgeType.Community) {
                state.allCommBadges.push(action.payload.badge);
            }
            return { ...state, allCorpBadges: state.allCorpBadges, allCommBadges: state.allCommBadges };
        default:
            return state;
    }
}