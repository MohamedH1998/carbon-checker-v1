import RingLoader from 'react-spinners/RingLoader';

interface Props {
  loading: boolean;
}
const Loader = ({ loading }: Props) => {
  return (
    <>
      <RingLoader
        color="#EBD8C8"
        loading={loading}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
