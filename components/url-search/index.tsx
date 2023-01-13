import React, { useState } from 'react';
import { validUrl } from '../../utils/helper';

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  urlError: boolean;
  loadingData: boolean;
}

const URLSearch = ({ setUrl, urlError, loadingData }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformedUrl = validUrl(data);
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
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full"
      >
        <input
          required
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter your URL"
          className="bg-squant py-3 px-5 rounded-full w-full mr-4"
        />
        <button
          disabled={loadingData}
          type="submit"
          className="rounded-full text-2xl p-1 px-3 text-powder-white  bg-squant"
        >
          +
        </button>
      </form>
      {error ||
        (urlError && (
          <p className="ml-2 py-2 text-red-500">
            Something went wrong, try again with a valid url
          </p>
        ))}
    </div>
  );
};

export default URLSearch;
