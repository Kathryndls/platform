import {Button, ThemeButton} from './Button';
import {render, screen} from "@testing-library/react";

describe('Button', () => {
    test('test render', () => {
       render(<Button>Test</Button>);
       expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('test clear theme', () => {
       render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
       expect(screen.getByText('Test')).toHaveClass('clear');
       // screen.debug()
    });
});