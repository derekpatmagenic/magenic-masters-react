import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, IStackStyles, IStackItemStyles } from 'office-ui-fabric-react';

function Header() {
    return (
        <header style={headerStyle}>
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        <h1>Badge App</h1>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">
                        <Stack horizontal gap={10} horizontalAlign="end" styles={itemAlginmentsStackStyles}>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/" style={linkStyle}>Badges</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/Account" style={linkStyle}>Account</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/Leaderboard" style={linkStyle}>Leaderboard</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/BadgeManager" style={linkStyle}>Badge Manager</Link></Stack.Item>
                            <Stack.Item align="center" styles={stackItemStyles}><Link to="/LogOff" style={linkStyle}>Log Off</Link></Stack.Item>
                        </Stack>
                    </div>
                </div>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
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