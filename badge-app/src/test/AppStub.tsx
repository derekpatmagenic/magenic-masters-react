import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {
    renderItem: JSX.Element;
}

AppStub.propTypes = {
    renderItem: PropTypes.node.isRequired
};

export default function AppStub({ renderItem }: Props): JSX.Element {
    return (
        <Router>{renderItem}</Router>
    );
}
