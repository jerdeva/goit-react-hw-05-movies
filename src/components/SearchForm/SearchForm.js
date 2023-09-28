import { DebounceInput } from 'react-debounce-input';
import {MainTitle} from './SearchForm.styled'


export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <MainTitle>Movie Search</MainTitle>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="enter your reques"
      />
    </form>
  );
};
