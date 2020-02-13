import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, IStackStyles, IStackItemStyles } from 'office-ui-fabric-react';

function Header() {
    return (
        <header className="App-header">
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        <h1>Badge App</h1>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                        <Stack horizontal gap={10} horizontalAlign="end" styles={itemAlginmentsStackStyles}>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/" className="header-link">Badges</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/Account" className="header-link">Account</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/Leaderboard" className="header-link">Leaderboard</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/BadgeManager" className="header-link">Badge Manager</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/LogOff" className="header-link">Log Off</Link></Stack.Item>
                        </Stack>
                    </div>
                </div>
            </div>
        </header>
    )
}

const itemAlginmentsStackStyles: IStackStyles = {
    root: {
        height: 100
    }
}

const stackItemStyles: IStackItemStyles = {
    root: {
        padding: 10
    }
}

export default Header;