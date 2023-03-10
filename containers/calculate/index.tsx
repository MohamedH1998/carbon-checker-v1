import React, { MutableRefObject, useEffect, useState } from 'react';
import { CgCoffee } from 'react-icons/cg';
import { IoMdRocket } from 'react-icons/io';
import Card from '../../components/card';
import URLSearch from '../../components/url-search';
import { getCalc } from '../../utils/helper';

interface Props {
  calculateRef: MutableRefObject<HTMLDivElement | null>;
  data: Data | undefined;
  setData: (data: Data | undefined) => void;
}

const Calculate = ({ calculateRef, data, setData }: Props) => {
  const [url, setUrl] = useState<string>('');
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [urlError, setUrlError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      data && setData(undefined);
      setLoadingData(true);
      const calcData = await getCalc(url);
      if (!calcData) {
        throw new Error('No data');
      }
      setData(calcData.data);
      setLoadingData(false);
      setUrl('');
    } catch (e) {
      setLoadingData(false);
      setUrlError(true);
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

  const defaultCardInfo = [
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
        <h2 className="text-3xl md:text-6xl md:py-6">
          Estimate your carbon footprint
          <small className="block text-dover-grey text-sm pt-3">
            *per 10,000 page views a month
          </small>
        </h2>
      </div>
      <div className="w-full flex flex-col space-y-6 md:space-y-0 py-4 items-center justify-between md:flex-row">
        <URLSearch
          loadingData={loadingData}
          urlError={urlError}
          setUrl={setUrl}
        />
        {defaultInfo || loadingData ? (
          <>
            {defaultCardInfo.map((card, i) => (
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
