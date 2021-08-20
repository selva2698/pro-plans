import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

function App(props) {
  const plan_features=[{type:"FREE",charges:0,No_of_users:{us:"single user",isbold:false},storage:"5GB",pri_pro:false,ph_sup:false,sub_dom:{dom:false},stat_rep:false},
  {type:"PLUS",charges:9,No_of_users:{us:"5 users",isbold:true},storage:"50GB",pri_pro:true,ph_sup:true,sub_dom:{dom:true},stat_rep:false},
  {type:"PRO",charges:49,No_of_users:{us:"Unlimited users",isbold:true},storage:"150GB",pri_pro:true,ph_sup:true,sub_dom:{un:"Unlimited",dom:true},stat_rep:true}];
  return (
    <div className="App">
        {plan_features.map((plan)=> <Plan 
        type={plan.type} 
        charges={plan.charges} 
        No_of_users={plan.No_of_users} 
        storage={plan.storage}
        pri_pro={plan.pri_pro}
        ph_sup={plan.ph_sup}
        sub_dom={plan.sub_dom}
        stat_rep={plan.stat_rep}
        />)}
    </div>
  );
}
function Plan (props){
  return(
          <div className="card">
            <div className="top">
            <div className="type">{props.type}</div>
            <div className="price">${props.charges}<span className="mon">/month</span></div>
            </div>
              <ul className="List">
                <li className={props.No_of_users.isbold?"bold":""}><p><span><FontAwesomeIcon icon={faCheck} fixedWidth /></span>{props.No_of_users.us}</p></li>
                <li className="true_class"><p><span><FontAwesomeIcon icon={faCheck} fixedWidth /></span>{props.storage}</p></li>
                <li className="true_class"><p><span><FontAwesomeIcon icon={faCheck} fixedWidth /></span>Unlimited Public Projects</p></li>
                <li className="true_class"><p><span><FontAwesomeIcon icon={faCheck} fixedWidth /></span>Community Access</p></li>
                <li className={props.pri_pro?("true_class"):("False_class")}><p><span>{props.pri_pro?<FontAwesomeIcon icon={faCheck} fixedWidth />:<FontAwesomeIcon icon={faTimes} fixedWidth />}</span>Unlimited Private Projects</p></li>
                <li className={props.ph_sup?("true_class"):("False_class")}><p><span>{props.ph_sup?<FontAwesomeIcon icon={faCheck} fixedWidth />:<FontAwesomeIcon icon={faTimes} fixedWidth />}</span>Dedicated Phone Support</p></li>
                <li className={props.sub_dom.dom?("true_class"):("False_class")}><p><span>{props.sub_dom.dom?<FontAwesomeIcon icon={faCheck} fixedWidth />:<FontAwesomeIcon icon={faTimes} fixedWidth />}</span><b>{props.sub_dom.un}</b> Free Subdomain</p></li>
                <li className={props.stat_rep?("true_class"):("False_class")}><p><span>{props.stat_rep?<FontAwesomeIcon icon={faCheck} fixedWidth />:<FontAwesomeIcon icon={faTimes} fixedWidth />}</span>Monthly Status Reports</p></li>
              </ul>
              <button className="btn1">Button</button>
          </div>     
  );

}
export default App;


