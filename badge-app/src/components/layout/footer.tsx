import React from 'react'
import { Stack } from 'office-ui-fabric-react'

function Footer() {
    let date = new Date();
    return (
        <footer className="App-footer">
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                        <Stack horizontal horizontalAlign="center">
                            <span>&copy; Copyright { date.getFullYear() }, Magenic Masters React</span>
                        </Stack>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;