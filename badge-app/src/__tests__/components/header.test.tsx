import React from 'react';
import { render } from '@testing-library/react';
import AppStub from '../../test/AppStub';
import Header from '../../components/layout/header';

it('renders without crashing', () => {
    render(
        <AppStub
            renderItem={
                <Header />
            }
        />
    );
});