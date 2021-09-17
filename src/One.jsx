import "./One.css";

function One(props) {
    let plan=props.plan, fact=props.fact, captionEn=props.captionEn, captionRu=props.captionRu;
    props.plan || (plan='50') 
    props.fact || (fact='50') 
    props.captionEn || (captionEn='<English Title>')
    props.captionRu || (captionRu='<Название по-русски>')
    
 return (
    <div className="One">

      { props.picture &&
        <img className="Pic" src={props.picture} height='200' alt="pic" /> }
      
      { captionEn &&
      <p className="CaptionEn">{captionEn}</p> }

      { captionRu &&
      <p className="CaptionRu">{captionRu}</p> }

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
