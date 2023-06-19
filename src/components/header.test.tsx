/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';
import '@testing-library/jest-dom'

describe('Header component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Header />);

    // 指定された要素とクラス名が存在するかをアサーションします
    expect(getByText('Whiteboard')).toBeInTheDocument();
    expect(getByText('Whiteboard')).toHaveClass('text-2xl', 'font-bold');
  });
});