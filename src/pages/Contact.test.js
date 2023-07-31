import { render, screen, fireEvent } from '@testing-library/react';
import { toast } from 'react-hot-toast';
import { Contact } from './Contact';

jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
  },
}));

describe('Contact', () => {
  test('submits the form successfully', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Name and Surname'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Select Date:'), { target: { value: '2023-07-31' } });
    fireEvent.change(screen.getByLabelText('Your Message:'), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByText('Submit'));

    expect(consoleSpy).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2023-07-31',
      title: 'Test Title',
      message: 'Test message',
      email: 'test@example.com',
    });

    expect(toast.success).toHaveBeenCalledWith('Your message has been sent successfully to our contact center!');

    expect(screen.getByLabelText('Title').value).toBe('');
    expect(screen.getByLabelText('E-mail').value).toBe('');
    expect(screen.getByLabelText('Name and Surname').value).toBe('');
    expect(screen.getByLabelText('Select Date:').value).toBe('');
    expect(screen.getByLabelText('Your Message:').value).toBe('');

    consoleSpy.mockRestore();
  });
});
