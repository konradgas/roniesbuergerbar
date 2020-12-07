import React from 'react';
import { render, screen } from '@testing-library/react';
import {Logo} from "./Logo";


test('renders logo followup text', () => {
    render(<Logo />);
    const linkElement = screen.getByText("onnie's burger bar");
    expect(linkElement).toBeInTheDocument();
});

test('renders logo initial text', () => {
    render(<Logo />);
    const linkElement = screen.getByTestId("logo-initial");
    expect(linkElement).toBeInTheDocument();
});