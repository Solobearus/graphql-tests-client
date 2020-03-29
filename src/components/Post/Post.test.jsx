import React from 'react'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Item from './Item'

afterEach(cleanup)

describe('Post component', () => {
    let props;

    beforeEach(() => {
        props = {
            test: "test"
        }
    });

    it('should render without crashing', () => {
        const { getByTestId } = render(<Post {...props}/>);
        const linkElement = getByTestId('Post');
        expect(linkElement).toBeInTheDocument();
    });
});