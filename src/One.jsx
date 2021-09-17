import "./One.css";

function One(props) {
  return (
    <div className="One">

       
      { props.picture &&
        <img src={props.picture} height='200' alt="pic" />}
      

      <p>{props.caption}</p>

      <meter id="meter1"
       min='0' max='100' optimum='100'
       low='0' high='100'
       value={props.plan}>
      </meter>
      <br/>

      <meter id="meter1"
       min='0' max='100' optimum='100'
       low={Number(props.plan)-1} high={Number(props.plan)+0}
       value={props.fact}>
      </meter>

    </div>
  );
}

export default One;
