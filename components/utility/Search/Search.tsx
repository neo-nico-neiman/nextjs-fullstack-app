import axios from 'axios';
import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post('api/search/', {
        searchTerm: search,
      });
      const data = await res.data;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-5"
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={search}
        onChange={(event) => setSearch(event.target?.value)}
      ></input>
      <div className="space-x-3">
        <button type="submit" className="btn-secondary">
          Google Search
        </button>
        <button type="submit" className="btn-secondary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
