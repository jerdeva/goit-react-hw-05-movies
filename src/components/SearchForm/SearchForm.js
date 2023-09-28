import { DebounceInput } from 'react-debounce-input';
import { MainTitle, Form } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <MainTitle>Movie Search</MainTitle>
      <DebounceInput
        type="text"
        debounceTimeout={400}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="enter your reques"
      />
    </Form>
  );
};
