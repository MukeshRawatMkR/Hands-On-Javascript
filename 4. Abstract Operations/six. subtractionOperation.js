console.log(2-null);//2- 0 
console.log(2- undefined);//2-NaN
console.log(undefined-undefined); //NaN- NaN 



console.log(10-"55");//10-55 
console.log(10-"55f");//10-NaN

//Assignment:
console.log(1 - "0xa");//JS's string→number conversion only succeeds if the entire string matches a valid number format (decimal, hex 0x, octal 0o, binary 0b, etc.).


console.log(Number("0xa"));   // 10
console.log(Number("0xaf"));  // 175 (hex 'af')
console.log(Number("0xg"));   // NaN ('g' isn't a hex digit)