import React from 'react';
import { Stack, IStackStyles, IStackItemStyles, Image, IImageStyles } from 'office-ui-fabric-react';
import useBadgeList from '../../hooks/UseBadgeList';

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
    const badges = useBadgeList();
    const badgeElements = badges.map((badge) => 
        <Image src={badge.path} title={badge.name} alt={badge.name} styles={imageStyles} />
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
            <Stack>
                <div>
                    {badgeElements}
                </div>
            </Stack>
        </Stack>
    )
}

export default CommunityBadges;