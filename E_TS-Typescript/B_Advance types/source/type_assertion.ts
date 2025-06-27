{
  const kgTogm = (value: string | number): string | number | undefined => {
    if(typeof value == 'string'){
      const convertedValue = parseFloat(value)*1000;
      return convertedValue;
    }
    else if(typeof value === 'number'){
      return value*1000;
    }


    const res1 = kgTogm(1000) as number; //ami sure number e pathab,,ts er cheye beshi bujhci ami
    const res2 = kgTogm('1000') as string;
  }
}