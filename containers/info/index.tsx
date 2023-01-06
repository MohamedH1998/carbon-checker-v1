import React, { useEffect, useState } from 'react'
import { CgCoffee } from 'react-icons/cg';
import { IoMdRocket } from 'react-icons/io';
import Card from '../../components/card';
import URLSearch from '../../components/url-search'
import { getCalc } from '../../utils/helper';

const Info = () => {
    const [url, setUrl] = useState<string>('')
    const [data, setData] = useState<Data | undefined>(undefined);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        if (!url) {
            return
        }
        const fetchData = async () => {
            setLoadingData(true);
            const { data } = await getCalc(url);
            setData(data);
            setLoadingData(false)
        }
        fetchData()
    }, [url])


    const renderData = () => {
        if (!data && loadingData) {
            return <div className="bg-pink-500 text-blue-700 p-8">Loading...</div>
        }
        if (!data) {
            return <div className="bg-yellow-500 text-blue-700 p-8">no data...</div>
        }
        const cardInfo = [
            {
                icon:<i className="rounded-md p-4 text-sandpiper bg-private-black text-4xl "><IoMdRocket/></i>,
            description: 'Every year, your website emits',
            stat: `${data?.annualEmissions?.result} ${data?.annualEmissions?.units}`
            },
            {
                icon: <i className="rounded-md p-4 text-kittens-eye bg-aeronautic text-4xl "><CgCoffee/></i>,
                description: 'Equivalent to',
                stat: `${data.cupsOfCoffee} cups of coffee`
            }
        ]

        return (
                <div className="space-y-3 py-5">
                    {cardInfo.map((card, i) => (
                        <Card icon={card.icon} description={card.description} stat={card.stat} key={i} />
                    ))}
                </div>
        )
    }

    const defaultInfo = !loadingData && !data


    const skeletonCardInfo = [
        {
            icon:<i className="rounded-md p-4 text-sandpiper bg-private-black text-4xl "><IoMdRocket/></i>,
        description: 'Every year, your website emits',
        stat: `--- Kg CO2e`,
        skeleton: true
        },
        {
        icon: <i className="rounded-md p-4 text-kittens-eye bg-aeronautic text-4xl "><CgCoffee/></i>,
        description: 'Equivalent to',
        stat: `--- cups of coffee`,
        skeleton: true

        }
    ]

  return (
    <section className="w-full py-20 text-powder-white">
        <small className="text-dover-grey">Calculate</small>
        <h4 className="text-3xl">Estimate your carbon footprint</h4>
        <URLSearch setUrl={setUrl} />
        {defaultInfo ? (
            <div className="space-y-3 py-5">
            {skeletonCardInfo.map((card, i) => (
                <Card {...card} key={i}/>
        ))}</div>
        ) : renderData()}

    </section>
  )
}

export default Info