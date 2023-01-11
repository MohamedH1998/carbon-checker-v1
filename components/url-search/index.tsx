import React, { useState } from 'react';
import { validUrl } from '../../utils/helper';

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  urlError: string;
}

const URLSearch = ({ setUrl, urlError }: Props) => {
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformedUrl = validUrl(e.target[0].value)!;
    if (transformedUrl === undefined) {
      setError(true);
    } else {
      setError(false);
      setUrl(transformedUrl);
    }
  };

  return (
    <div className="w-full md:mr-20">
      <form
        className="flex items-center justify-between w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          required
          placeholder="Enter your URL"
          className="bg-squant py-3 px-5 rounded-full w-full mr-4"
        />
        <button
          type="submit"
          className="rounded-full text-2xl p-1 px-3 text-powder-white  bg-squant"
        >
          +
        </button>
      </form>
      {error ||
        (urlError && (
          <p className="ml-2 py-2 text-red-500">Please enter a valid url</p>
        ))}
    </div>
  );
};

export default URLSearch;
