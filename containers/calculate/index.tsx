import React, { MutableRefObject, useEffect, useState } from 'react';
import { CgCoffee } from 'react-icons/cg';
import { IoMdRocket } from 'react-icons/io';
import Card from '../../components/card';
import Loader from '../../components/loader';
import URLSearch from '../../components/url-search';
import { getCalc } from '../../utils/helper';

interface Props {
  calculateRef: MutableRefObject<HTMLDivElement | null>;
  data: Data | undefined;
  setData: (data: Data) => void;
}

const Calculate = ({ calculateRef, data, setData }: Props) => {
  const [url, setUrl] = useState<string>('');
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoadingData(true);
      const { data } = await getCalc(url);
      setData(data);
      setLoadingData(false);
      setUrl('');
    } catch (e) {
      setUrlError(true);
      setLoadingData(false);
      setUrl('');
    }
  };

  useEffect(() => {
    urlError && setUrlError(false);
    if (!url) {
      return;
    }
    fetchData();
  }, [url]);

  const renderData = () => {
    // if (loadingData) {
    //   return (
    //     <div className="w-full my-10 flex flex-col items-center justify-center">
    //       <Loader loading={loadingData} />
    //     </div>
    //   );
    // }
    if (!data) {
      return;
    }
    const cardInfo = [
      {
        icon: (
          <i className="rounded-md p-4 text-sandpiper bg-private-black text-4xl ">
            <IoMdRocket />
          </i>
        ),
        description: 'Every year, your website emits',
        stat: `${data?.annualEmissions?.result} ${data?.annualEmissions?.units}`,
      },
      {
        icon: (
          <i className="rounded-md p-4 text-kittens-eye bg-aeronautic text-4xl ">
            <CgCoffee />
          </i>
        ),
        description: 'Equivalent to',
        stat: `${data.cupsOfCoffee} cups of coffee`,
      },
    ];

    return (
      <>
        {cardInfo.map((card, i) => (
          <Card
            icon={card.icon}
            description={card.description}
            stat={card.stat}
            key={i}
          />
        ))}
      </>
    );
  };

  const defaultInfo = !loadingData && !data;

  const skeletonCardInfo = [
    {
      icon: (
        <i className="rounded-md p-4 text-sandpiper md:mr-2 bg-private-black text-4xl">
          <IoMdRocket />
        </i>
      ),
      description: 'Every year, your website emits',
      stat: `--- Kg CO2e`,
      skeleton: true,
    },
    {
      icon: (
        <i className="rounded-md p-4 md:mr-2 text-kittens-eye bg-aeronautic text-4xl ">
          <CgCoffee />
        </i>
      ),
      description: 'Equivalent to',
      stat: `--- cups of coffee`,
      skeleton: true,
    },
  ];

  return (
    <section
      ref={calculateRef}
      className="w-full py-20 px-4 text-powder-white flex flex-col md:items-between md:py-24 md:px-20"
    >
      <div className="w-full">
        <small className="block text-dover-grey uppercase pb-3">
          Calculate
        </small>
        <h2 className="text-3xl md:text-6xl md:py-6">
          Estimate your carbon footprint
        </h2>
      </div>
      <div className="w-full flex flex-col space-y-6 md:space-y-0 py-4 items-center justify-between md:flex-row">
        <URLSearch urlError={urlError} setUrl={setUrl} />
        {defaultInfo || loadingData ? (
          <>
            {skeletonCardInfo.map((card, i) => (
              <Card {...card} loadingData={loadingData} key={i} />
            ))}
          </>
        ) : (
          renderData()
        )}
      </div>
    </section>
  );
};

export default Calculate;
