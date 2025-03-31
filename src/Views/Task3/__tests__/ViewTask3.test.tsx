import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Task3 from '../Task3.tsx'

// This test is setup using Vitest. It is very similar to jest.

const setup = () => {
    render(<Task3 />);
};

describe('Task3', () => {
    test('Form renders', async () => {
        setup();
        expect(screen.getByText('Name'));
        expect(screen.getByRole('textbox'));
        expect(screen.getByRole('button', {name: "Submit"}));
    })
    test('Invalid name cannot be added', async () => {
        setup();
        
        await userEvent.type(screen.getByRole('textbox'), 'Al{enter}');
        
        expect(screen.getByText('New name should be at least 3 characters long.'));
    });
    test('Duplicate name cannot be added', async () => {
        setup();
        
        await userEvent.type(screen.getByRole('textbox'), 'Alan{enter}');

        expect(screen.getByText('Alan'));
    
        await userEvent.type(screen.getByRole('textbox'), 'Alan{enter}');

        expect(screen.getByText('New name cannot be the same as any name already on the list below.'));
    });
    test('Name can be removed from list and readded', async () => {
        setup();
        
        await userEvent.type(screen.getByRole('textbox'), 'Alan{enter}');

        expect(screen.getByText('Alan'));

        await userEvent.click(screen.getByRole('button', {name: "X"}));
        await userEvent.type(screen.getByRole('textbox'), 'Alan{enter}');

        expect(screen.getByText('Alan'));
    });
})
