type Data = {
    annualEmissions?: {result: number, units: string};
    energyPerVisit?: { result: number, units: string};
    emissionsPerVisit?: {result: number, units: string};
    annualEmissions: {result: number, units: string};
    annualEnergy: {result: number, units: string};
    cupsOfCoffee: {result: string}
}

type Ref = HTMLButtonElement | null;