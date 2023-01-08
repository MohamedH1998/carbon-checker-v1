import React from 'react';
import { validUrl } from '../../utils/helper';

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

const URLSearch = ({ setUrl }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const transformedUrl = validUrl(e.target[0].value);
    if (!transformedUrl) {
      return;
    }
    setUrl(transformedUrl);
  };

  return (
    <form
      className="flex items-center justify-between pr-3 py-3 w-full md:pr-20"
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
  );
};

export default URLSearch;
