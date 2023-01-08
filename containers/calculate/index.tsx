import React, { MutableRefObject, useEffect, useState } from 'react';
import { CgCoffee } from 'react-icons/cg';
import { IoMdRocket } from 'react-icons/io';
import Card from '../../components/card';
import Loader from '../../components/loader';
import Section from '../../components/section';
import URLSearch from '../../components/url-search';
import { getCalc } from '../../utils/helper';

interface Props {
  calculateRef: MutableRefObject<HTMLDivElement | null>;
}

const Calculate = ({ calculateRef }: Props) => {
  const [url, setUrl] = useState<string>('');
  const [data, setData] = useState<Data | undefined>(undefined);
  const [loadingData, setLoadingData] = useState(false);

  const fetchData = async () => {
    try {
      setLoadingData(true);
      const { data } = await getCalc(url);
      setData(data);
      setLoadingData(false);
      setUrl('');
    } catch (e) {
      console.log('oops', e.message);
      setData(undefined);
      setLoadingData(false);
      setUrl('');
    }
  };

  useEffect(() => {
    if (!url) {
      return;
    }
    fetchData();
  }, [url]);

  const renderData = () => {
    if (!data && loadingData) {
      return (
        <div className="w-full my-10 flex flex-col items-center justify-center">
          <Loader loading={loadingData} />
        </div>
      );
    }
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
      <div className="space-y-3 py-5">
        {cardInfo.map((card, i) => (
          <Card
            icon={card.icon}
            description={card.description}
            stat={card.stat}
            key={i}
          />
        ))}
      </div>
    );
  };

  const defaultInfo = !loadingData && !data;

  const skeletonCardInfo = [
    {
      icon: (
        <i className="rounded-md p-4 text-sandpiper bg-private-black text-4xl ">
          <IoMdRocket />
        </i>
      ),
      description: 'Every year, your website emits',
      stat: `--- Kg CO2e`,
      skeleton: true,
    },
    {
      icon: (
        <i className="rounded-md p-4 text-kittens-eye bg-aeronautic text-4xl ">
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
      className="w-full py-5 px-4 text-powder-white flex flex-col md:items-between"
    >
      <div className="w-full">
        <small className="block text-dover-grey uppercase pb-3">
          Calculate
        </small>
        <h2 className="text-5xl">Estimate your carbon footprint</h2>
      </div>
      <div className="w-full flex flex-col space-y-6 py-4 justify-between md:flex-row">
        <URLSearch setUrl={setUrl} />
        {defaultInfo ? (
          <>
            {skeletonCardInfo.map((card, i) => (
              <Card {...card} key={i} />
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
