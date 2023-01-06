export const validUrl = (url: string) => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const protocolExpression = /^(http|https):[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const protocolRegex = new RegExp(protocolExpression);
    if (!url || !url.match(regex)) {
        return undefined
    }
    if (url && url.match(regex)) {
        return `http://${url}`;
    }
    if (url && url.match(protocolRegex)) {
        return url;
    }
}


export async function getCalc(url: string) {
    const testing = await fetch('/api/test', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(url)
    });
    const test = await testing.json();
    return test
  }


export function roundToOneDecimal(num: number): number {
    return Number(num.toFixed(1));
  }