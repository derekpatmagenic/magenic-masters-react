import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { ReduxState } from '../../store/Store';
import { Stack, IStackStyles, IStackItemStyles, Image, IImageStyles } from 'office-ui-fabric-react';
import useBadgeList from '../../hooks/UseBadgeList';
import { loadAllBadges, addBadge } from '../../store/Badges';
import Badge from '../../models/Badge';

function CommunityBadges() {
    const stackStyles: Partial<IStackStyles> = {
        root: { width: 600 }
    };
    const headerStackStyles: Partial<IStackStyles> = {
        root: { display: "block" }
    };
    const headerLeftStackItemStyles: Partial<IStackItemStyles> = {
        root: { float: "left", height: 60 }
    };
    const headerRightStackItemStyles: Partial<IStackItemStyles> = {
        root: { float: "right", height: 60, paddingTop: 30 }
    };
    const imageStyles: Partial<IImageStyles> = {
        root: { float: "left", margin: "10px" }
    };
    const badgeList: Array<Badge> = useBadgeList();
    const allBadges = loadAllBadges(badgeList);
    const allCommBadgeElements = allBadges.payload.allCommBadges.map((badge) => 
        <Image key={badge.id} src={badge.path} title={badge.name} alt={badge.name} styles={imageStyles} />
    );
    const earnedCommBadgeElements = allBadges.payload.earnedCommBadges.map((badge) => 
        <Image key={badge.id} src={badge.path} title={badge.name} alt={badge.name} styles={imageStyles} />
    );
    return (
        <Stack styles={stackStyles}>
            <Stack styles={headerStackStyles}>
                <Stack.Item styles={headerLeftStackItemStyles}>
                    <h1>Community Badges</h1>
                </Stack.Item>
                <Stack.Item styles={headerRightStackItemStyles}>
                    <span>
                        <span>All</span>
                        <span> | </span>
                        <span>Earned</span>
                    </span>
                </Stack.Item>
            </Stack>
            <Stack hidden={false}>
                <div>
                    {allCommBadgeElements}
                </div>
            </Stack>
            <Stack hidden={false}>
                <div>
                    {earnedCommBadgeElements}
                </div>
            </Stack>
        </Stack>
    )
}

const mapStateToProps = (state: ReduxState) => ({
    badges: state.badges
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => 
    bindActionCreators(
        {
            loadAllBadges, addBadge
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CommunityBadges);