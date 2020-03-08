import React from 'react';
import CorporateBadges from '../layout/CorporateBadges';
import CommunityBadges from '../layout/CommunityBadges';
import ActivitySubmit from '../layout/ActivitySubmit';
import { TabType } from '../../enums/TabType';

function Badges() {
    return (
        <React.Fragment>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm8 ms-md8 ms-lg8">
                        <CorporateBadges tabType={TabType.All}></CorporateBadges>
                        <CommunityBadges tabType={TabType.All}></CommunityBadges>
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <ActivitySubmit></ActivitySubmit>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Badges;