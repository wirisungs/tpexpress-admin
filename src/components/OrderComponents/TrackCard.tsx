import React from 'react'
import TramCSS from '@/Style/Tram.module.css'

interface TrackCardProps {
  text: string;
  icon?: React.ReactNode;
  customColor?: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ text, icon, customColor }) => {
  return (
    <div className={TramCSS.card}>
      <div style={{backgroundColor: `${customColor? `${customColor}` : `#FBECDA`}`, height:'48px',width:'48px', borderRadius:'24px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        {icon}
      </div>

      <div>
        <h2>122</h2>
        <span className={'text-[12px]'}>{text}</span>
      </div>
    </div>
  )
}

export default TrackCard

