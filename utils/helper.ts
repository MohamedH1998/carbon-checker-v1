export async function getCalc(url: string) {
    try{
    const resp = await fetch('/api/test', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(url)
    });
    if (resp.status === 404) {
      throw new Error('No data')
    }
    const data = await resp.json();
    return data
    }catch(e) {
        return undefined;
  }
  }


export function roundToOneDecimal(num: number): number {
    return Number(num.toFixed(1));
  }


export  function validUrl(url: string): string | undefined {
  const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
  if (!urlRegex.test(url)) {
    return undefined;
  }
  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('www.')) {
    return 'http://www.' + url;
  }
  return url;
}