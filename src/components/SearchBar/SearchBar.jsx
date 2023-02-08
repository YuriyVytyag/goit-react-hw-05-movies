import { MovieInput } from './SearchBar.styled';
export const SearchBar = ({ onChange, value }) => {
  return (
    <>
      <MovieInput
        type="text"
        value={value}
        onInput={e => onChange(e.target.value)}
      />
    </>
  );
};
