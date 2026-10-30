export function parseData(raw) {
  if(typeof raw !== 'string' || raw.length > 30000) throw Error('Usa texto con máximo 30.000 caracteres.');
  const tokens = raw.trim().split(/[;\s]+/).filter(Boolean);
  if(!tokens.length) throw Error('Ingresa al menos un dato.');
  if(tokens.length > 1000) throw Error('Máximo 1.000 datos por cálculo.');
  return tokens.map(t => {
    if(!/^[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?$/i.test(t)) throw Error(`Dato no válido: ${t}. Separa datos con espacio, ; o salto de línea.`);
    const n = Number(t.replace(',', '.'));
    if(!Number.isFinite(n) || Math.abs(n)>1e100) throw Error('Usa datos finitos con magnitud hasta 1e100.');
    return n;
  });
}
export function describe(values, sample = true) {
  if(!Array.isArray(values)||!values.length||values.some(x=>!Number.isFinite(x)||Math.abs(x)>1e100)) throw Error('Datos inválidos.');
  const n=values.length, sorted=[...values].sort((a,b)=>a-b), sum=values.reduce((a,b)=>a+b,0), mean=sum/n;
  const squares=values.map(x=>(x-mean)**2), ss=squares.reduce((a,b)=>a+b,0);
  const counts=new Map(); values.forEach(x=>counts.set(x,(counts.get(x)||0)+1));
  const frequency=Math.max(...counts.values());
  const modes=frequency===1?[]:[...counts].filter(([,v])=>v===frequency).map(([k])=>k).sort((a,b)=>a-b);
  const variance=sample&&n===1?null:ss/(sample?n-1:n);
  return {n,sum,mean,median:n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2,modes,frequency,range:sorted[n-1]-sorted[0],variance,deviation:variance===null?null:Math.sqrt(variance),ss,sorted,squares};
}
export const units={
  m:{label:'Metros (m)',dimension:'longitud',factor:1},km:{label:'Kilómetros (km)',dimension:'longitud',factor:1000},cm:{label:'Centímetros (cm)',dimension:'longitud',factor:.01},mm:{label:'Milímetros (mm)',dimension:'longitud',factor:.001},
  kg:{label:'Kilogramos (kg)',dimension:'masa',factor:1},g:{label:'Gramos (g)',dimension:'masa',factor:.001},mg:{label:'Miligramos (mg)',dimension:'masa',factor:.000001},
  s:{label:'Segundos (s)',dimension:'tiempo',factor:1},min:{label:'Minutos (min)',dimension:'tiempo',factor:60},h:{label:'Horas (h)',dimension:'tiempo',factor:3600},
  C:{label:'Celsius (°C)',dimension:'temperatura'},F:{label:'Fahrenheit (°F)',dimension:'temperatura'},K:{label:'Kelvin (K)',dimension:'temperatura'}
};
export function convert(value,from,to){
  if(!Number.isFinite(value)||Math.abs(value)>1e100)throw Error('Ingresa un número finito de magnitud hasta 1e100.');
  if(typeof from!=='string'||typeof to!=='string'||!Object.hasOwn(units,from)||!Object.hasOwn(units,to))throw Error('Selecciona unidades válidas.');
  const a=units[from],b=units[to];
  if(!a||!b||a.dimension!==b.dimension)throw Error('Las unidades deben medir la misma magnitud.');
  if(a.dimension==='temperatura'){
    const kelvin=from==='K'?value:from==='C'?value+273.15:(value-32)*5/9+273.15;
    if(kelvin < -1e-10)throw Error('La temperatura no puede ser menor que el cero absoluto.');
    const safeKelvin=Math.max(0,kelvin);
    const result=to==='K'?safeKelvin:to==='C'?safeKelvin-273.15:(safeKelvin-273.15)*9/5+32;
    return {result,steps:[`Expresa el valor en kelvin: ${safeKelvin}.`,to==='K'?'La unidad destino ya es kelvin.':to==='C'?'Resta 273,15 al valor en kelvin.':'Resta 273,15; multiplica por 9/5 y suma 32.',`Resultado: ${result} ${to}.`]};
  }
  const base=value*a.factor,result=base/b.factor;
  return {result,steps:[`Multiplica ${value} por ${a.factor}: ${base} en la unidad base.`,`Divide ${base} entre ${b.factor}.`,`Resultado: ${result} ${to}.`]};
}
export function checkAnswer(actual,proposed,tolerance){
  if(![actual,proposed,tolerance].every(Number.isFinite)||tolerance<0)throw Error('Resultado, respuesta y tolerancia deben ser números finitos; tolerancia ≥ 0.');
  return {correct:Math.abs(actual-proposed)<=tolerance,difference:Math.abs(actual-proposed)};
}
export function validateBackup(data){
  if(!data||data.version!==1||typeof data.raw!=='string'||data.raw.length>30000||typeof data.sample!=='boolean'||typeof data.value!=='string'||data.value.length>100||typeof data.from!=='string'||typeof data.to!=='string'||!Object.hasOwn(units,data.from)||!Object.hasOwn(units,data.to))throw Error('Respaldo incompatible o inválido.');
  if(units[data.from].dimension!==units[data.to].dimension)throw Error('El respaldo contiene magnitudes incompatibles.');
  if(data.raw.trim())parseData(data.raw);
  if(data.value.trim())convert(Number(data.value.replace(',','.')),data.from,data.to);
  return {version:1,raw:data.raw,sample:data.sample,value:data.value,from:data.from,to:data.to};
}
