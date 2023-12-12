import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

test('renders Title Text', () => {
    render(<Accordion active title="Title Test" txtSizeContent="24px" value="Value for Test" valueIsArray={false}/>);
    const linkElement = screen.getByText(/Title Test/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders Content Text', () => {
    render(<Accordion active title="Title Test" txtSizeContent="24px" value="Value for Test" valueIsArray={false}/>);
    const linkElement = screen.getByText(/Value for Test/i);
    expect(linkElement).toBeInTheDocument();
});
