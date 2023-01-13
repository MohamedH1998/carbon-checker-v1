import type { NextApiRequest, NextApiResponse } from 'next'
import { calculateAnnualEmissions, calculateAnnualEnergy, calculateEnergyConsumption, cupsOfCoffeeEquivalence } from '../../utils/calculations';
   
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const parsedUrl = req.body;
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${parsedUrl}&fields=lighthouseResult(audits)&category=performance&strategy=desktop&key=${process.env.GOOGLE_API_KEY}`;
    const { data } = await axios.get(url);
    const pageSize = data.lighthouseResult.audits['total-byte-weight'].numericValue;
    const energyPerVisit = calculateEnergyConsumption(pageSize);
    const annualEmissions = calculateAnnualEmissions(energyPerVisit);
    const annualEnergy = calculateAnnualEnergy(energyPerVisit);
    const cupsOfCoffee = cupsOfCoffeeEquivalence(annualEnergy.result);
    res.status(200).json({ data: { annualEmissions, annualEnergy, cupsOfCoffee } });
  } catch (e) {
    res.status(404).json({ error: `${e.message}` });
  }
}
  