export function FacilityFallback() {
  return <svg className="facility-fallback" viewBox="0 0 900 620" aria-hidden="true">
    <defs>
      <linearGradient id="facility-metal"><stop stopColor="#647f70"/><stop offset=".45" stopColor="#d6dfce"/><stop offset="1" stopColor="#829d8c"/></linearGradient>
      <pattern id="facility-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#8bab91" strokeWidth=".5" opacity=".25"/></pattern>
    </defs>
    <path d="M90 320L450 120 815 320 450 525Z" fill="#26483b" stroke="#b5d49d" strokeOpacity=".5"/>
    <path d="M90 320V340L450 545 815 340V320L450 525Z" fill="#19372d"/>
    <path d="M90 320L450 120 815 320 450 525Z" fill="url(#facility-grid)"/>
    {[[340,270],[485,205],[245,340],[390,380]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}>
      <ellipse rx="57" ry="25" fill="#19392b"/>
      <path d="M-52 0V-75C-52-102 52-102 52-75V0C52 28-52 28-52 0" fill="url(#facility-metal)"/>
      <ellipse cy="-75" rx="52" ry="23" fill="#d8deca" stroke="#819b84"/>
      <path d="M-52-20C-52 7 52 7 52-20M-52-45C-52-18 52-18 52-45" fill="none" stroke="#526d5c" opacity=".6"/>
      <ellipse cy="-83" rx="45" ry="19" fill="none" stroke="#d3e6cb" strokeWidth="2"/>
    </g>)}
    <path d="M565 250L654 200 740 250 650 300Z" fill="#b4c6a7"/><path d="M565 250V325L650 375V300Z" fill="#688977"/><path d="M650 300V375L740 325V250Z" fill="#476958"/>
    <path d="M140 320L450 145 770 320 450 495Z" fill="none" stroke="#c4e79f" strokeWidth="2" strokeDasharray="6 6"/>
    <path d="M448 430L550 370 620 410" fill="none" stroke="#d3bf85" strokeWidth="5"/>
    <path d="M340 200V145H570V350M485 130V110H610V350M390 310V285H650V350" fill="none" stroke="#83cbbf" strokeWidth="2" strokeDasharray="7 6"/>
    <g transform="translate(540 350)"><rect width="190" height="128" rx="4" fill="#173329" stroke="#a5bda3" strokeWidth="3"/>
      {['УРОВНИ','ГАЗ','СИГНАЛЫ','14 КАНАЛОВ'].map((label,i)=><g key={label} transform={`translate(${10+i%2*88} ${12+Math.floor(i/2)*56})`}><rect width="80" height="48" rx="2" fill="#0c201c" stroke="#658b78"/><text x="7" y="16" fill="#b4d2a1" fontSize="8" fontFamily="Arial">{label}</text><path d="M8 30H66M8 37H47" stroke="#7bb9a5" strokeWidth="3"/></g>)}
    </g>
    {[[150,320],[755,325],[450,490]].map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}><path d="M0 0V-80H17" fill="none" stroke="#c7debf" strokeWidth="3"/><rect x="10" y="-87" width="26" height="12" rx="2" fill="#e3ecdb"/><circle cx="36" cy="-81" r="3" fill="#bde498"/></g>)}
  </svg>;
}
