import React, { useEffect, useState } from 'react';
import { IoMdRocket } from 'react-icons/io';
import { CgCoffee } from 'react-icons/cg';
import URLSearch from '../../components/url-search';
import RadialProgresBar from '../../components/radial-progress-bar';
import Card from '../../components/card';

async function getCalc(url: string) {
  const testing = await fetch('http://localhost:3000/api/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(url),
  });
  const test = await testing.json();

  return test;
}

const Calculate = () => {
  const [url, setUrl] = useState<string>('');
  const [data, setData] = useState<any>(undefined);
  const [loadingData, setLoadingData] = useState<boolean | undefined>(
    undefined
  );
  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setLoadingData(true);
      const data = await getCalc(url);
      setData(data);
      setLoadingData(false);
    };
    fetchData();
  }, [url]);

  const renderData = () => {
    if (loadingData === undefined) {
      <div>Undefined</div>;
    }
    if (loadingData) {
      <div>loading</div>;
    }
    const cardInfo = [
      {
        icon: (
          <i className="rounded-md p-4 text-sandpiper bg-private-black text-4xl ">
            <IoMdRocket />
          </i>
        ),
        description: 'Every year, your website emits',
        stat: `${data.annualEmissions.result} ${data.annualEmissions.units}`,
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
      <div className="pt-10">
        {cardInfo.map((card, i) => (
          <Card
            icon={card.icon}
            description={card.description}
            stat={card.stat}
            key={i}
          />
        ))}
        <RadialProgresBar />
        <p className="text-center -mt-4 text-lg">Cleaner than sites tested</p>
      </div>
    );
  };

  return (
    <section className="w-full py-20 text-powder-white">
      <small className="text-dover-grey">Calculate</small>
      <h4 className="text-3xl">Estimate your carbon footprint</h4>
      <URLSearch setUrl={setUrl} />
      {renderData()}
      {/* <div className="pt-10">
        {cardInfo.map((card, i) => (
            <Card icon={card.icon} description={card.description} stat={card.stat} key={i} />
        ))}
         <RadialProgresBar/>
        <p className="text-center -mt-4 text-lg">Cleaner than sites tested</p>
        </div> */}
    </section>
  );

  // if (loadingData === undefined) {
  //     <div>Undefined</div>
  // }
  // if (loadingData) {
  //     <div>loading</div>
  // }

  // return (
  //         <section className="w-full py-20 text-powder-white">
  //             <small className="text-dover-grey">Calculate</small>
  //             <h4 className="text-3xl">Estimate your carbon footprint</h4>
  //             <URLSearch setUrl={setUrl} />
  //             <div className="pt-10">
  //             {cardInfo.map((card, i) => (
  //                 <Card icon={card.icon} description={card.description} stat={card.stat} key={i} />
  //             ))}
  //             </div>
  //             <RadialProgresBar/>
  //             <p className="text-center -mt-4 text-lg">Cleaner than sites tested</p>
  //         </section>
  //     )
};

export default Calculate;
