import { useRouter } from 'next/router';
import { useState } from 'react';
export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    search !== '' && router.push(`/results?search=${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-y-5"
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-128 h-12 px-3"
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
