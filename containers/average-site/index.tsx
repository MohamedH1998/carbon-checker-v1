import Image from 'next/image'
import React from 'react'

const AverageSite = () => {
  return (
    <div className="border-2 border-dover-grey text-powder-white rounded-xl py-4 px-3 flex flex-col items-center justify-center mx-2 md:w-8/12">
            <h4 className="text-xl">Average website</h4>
            <Image className="w-9/12 py-10" src="/line.svg" width="200" height="200" alt="Rocket"/>
            <div className="flex items-center justify-center space-x-2">
            <div className="flex flex-col justify-between border-2 border-dover-grey rounded-xl bg-gradient-to-r from-off-black to-storm-dust text-sandpiper space-y-3 py-2 px-4">
                <div>
                <small className="block text-xl">60</small>
                <small className="block text-xs">kg</small>
                </div>
                <small className="block text-xs">CO2 produced every year</small>
            </div>
            <div className="flex flex-col self-stretch justify-between border-2 border-dover-grey rounded-xl  bg-gradient-to-r from-off-black to-renaissance text-kittens-eye space-y-3 py-2 px-4">
                <div>
                <small className="block text-xl">2,857</small>
                </div>
                <small className="block text-xs">Equivalence in cups of coffee</small>
            </div>
            </div>
    </div>
  )
}

export default AverageSite