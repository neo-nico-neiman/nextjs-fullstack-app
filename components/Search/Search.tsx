import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const [search, setSearch] = useState<string>('');

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
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
