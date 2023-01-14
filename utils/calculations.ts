import { roundToOneDecimal } from "./helper";

function convertBytesToGB(bytes: number):number {
    const transformedData =  bytes / 1073741824
    return transformedData
}

export function calculateEnergyConsumption(dTPerVisit: number) {
    const transformedDTPerVisit = convertBytesToGB(dTPerVisit)
    const vibe = transformedDTPerVisit * 0.81 * 0.75;
    return vibe
  }

export function calculateEmissionsPerVisit(energy: number) {
    const result = energy * 442;
    const resultKg = result / 1000
    return {
        result: resultKg,
        units: 'kg CO2e'
    }
}

export function calculateAnnualEnergy(energy: number) {
    const result = energy * 10000 * 12
    const transformedResult = roundToOneDecimal(result)
    return {
        result: transformedResult,
        units: 'kWh'
    }
}

export function calculateAnnualEmissions(energy: number) {
    const emissionsPerVisit = calculateEmissionsPerVisit(energy);
    const result = emissionsPerVisit.result * 10000 * 12
    const transformedResult = roundToOneDecimal(result)
    return {
        result: transformedResult,
        units: 'kg CO2e'
    }
}


export function cupsOfCoffeeEquivalence(energyInKg: number) {
    const energyInG = energyInKg * 1000;
    const cupsOfCoffee = energyInG * 0.047;
    const transformedCupsOfCoffee = roundToOneDecimal(cupsOfCoffee)
    return transformedCupsOfCoffee;
}