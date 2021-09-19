import React from 'react'
import "./One.css";

function One( { plan='50', 
                fact='50',
                captionEn='Indicator',
                captionRu='Показатель',
                picture='./default.png'
              }) {
 return (
    <div className="One">
      <img className="Pic" src={picture}  alt="pic" /> 
      <p className="CaptionEn">{captionEn}</p> 
      <p className="CaptionRu">{captionRu}</p> 
      <meter id="meter1"
       min='0' max='100' optimum='100'
       low='0' high='100'
       value={plan}>
      </meter>
      <br/>
      <meter id="meter2"
       min='0' max='100' optimum='100'
       low={Number(plan)-1} high={Number(plan)+0}
       value={fact}>
      </meter>
    </div>
  );
}

export default One;


