import construction from '../img/construction.svg';

export default function UnderConstruction({data}){
   return(
    <div className="crane-container">
        <h1>404</h1>
    <div className="crane">
    <img src={construction} alt="" height='320px'/></div>
    <h1 className="construction-text">
    This Page should have {data} <br />but it is under Construction</h1>
    </div>
   )
}