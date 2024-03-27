import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { DOMTesting } from '../../src/components/dom';

describe('unit testing for demo', () => {
  
    test('loads and displays greeting', async () => {
        // ARRANGE
        render(<DOMTesting />)

        // ACT
        await screen.getByTestId('connect-status');

        // ASSERT
        expect(screen.getByTestId('connect-status')).toHaveTextContent('Status:NO');
        await userEvent.click(screen.getByRole('button'))
        expect(screen.getByTestId('connect-status')).toHaveTextContent('Status:YES');
        await userEvent.click(screen.getByRole('button'))
        expect(screen.getByTestId('root')).toMatchSnapshot();      
    })
})