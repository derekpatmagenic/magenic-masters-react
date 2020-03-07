import Badge from "../models/Badge";
import ReduxAction, { ReduxActionType } from "./ReduxAction";
import { BadgeType } from "../enums/BadgeType";

export interface ReduxBadgesState {
    allCorpBadges: Array<Badge>,
    allCommBadges: Array<Badge>,
    earnedCorpBadges: Array<Badge>,
    earnedCommBadges: Array<Badge>
}

const initialState: ReduxBadgesState = {
    allCorpBadges: [],
    allCommBadges: [],
    earnedCorpBadges: [],
    earnedCommBadges: []
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
    earnedCorpBadges: Array<Badge>;
    earnedCommBadges: Array<Badge>;
}

export interface ReduxLoadAllBadgesAction extends ReduxAction {
    type: ReduxActionType.LOAD_ALL_BADGES,
    payload: ReduxLoadAllBadgesPayload
}

export function loadAllBadges(badgeList: Array<Badge>): ReduxLoadAllBadgesAction {
    const allCorpBadges: Array<Badge> = badgeList.filter(badge => badge.type === BadgeType.Corporate);
    const allCommBadges: Array<Badge> = badgeList.filter(badge => badge.type === BadgeType.Community);
    const earnedCorpBadges: Array<Badge> = initialState.earnedCorpBadges;
    const earnedCommBadges: Array<Badge> = initialState.earnedCommBadges;
    return {
        type: ReduxActionType.LOAD_ALL_BADGES,
        payload: { 
            allCorpBadges: allCorpBadges, 
            allCommBadges: allCommBadges,
            earnedCorpBadges: earnedCorpBadges,
            earnedCommBadges: earnedCommBadges
        }
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
            console.log(action.payload);
            if(action.payload.badge.type === BadgeType.Corporate) {
                state.earnedCorpBadges.push(action.payload.badge);
            }
            else if(action.payload.badge.type === BadgeType.Community) {
                state.earnedCommBadges.push(action.payload.badge);
            }
            return { 
                ...state, 
                allCorpBadges: state.allCorpBadges, 
                allCommBadges: state.allCommBadges, 
                earnedCorpBadges: state.earnedCorpBadges, 
                earnedCommBadges: state.earnedCommBadges 
            };
        default:
            return state;
    }
}