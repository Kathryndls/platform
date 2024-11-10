import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import {componentRender} from 'shared/lib/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementButton = screen.getByTestId('increment-btn');
        const valueTitle = screen.getByTestId('value-title');

        await userEvent.click(incrementButton);
        expect(valueTitle).toHaveTextContent('11');
    });

    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10}},
        });
        const decrementBtn = screen.getByTestId('decrement-btn');
        const valueTitle = screen.getByTestId('value-title');

        await userEvent.click(decrementBtn);
        expect(valueTitle).toHaveTextContent('9');
    });
});
