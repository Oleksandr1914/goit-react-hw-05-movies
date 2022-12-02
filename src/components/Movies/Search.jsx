import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Submit } from './MoviesStyled';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [, setSearchParams] = useSearchParams('');

  const onInput = e => {
    const input = e.target.value;
    setInputText(input);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: inputText });
  };

  return (
    <Submit onSubmit={onSubmit}>
      <input type="text" onChange={onInput} />
      <button type="submit">Search</button>
    </Submit>
  );
};
export default Search;
