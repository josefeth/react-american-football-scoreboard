import React from 'react';
import './App';

// function AwayScore(props) {
//   return (
//     <div className="awayButtons">
//           <button className="awayButtons__touchdown" onClick={props.sucks1}>Away Touchdown</button>
//           <button className="awayButtons__fieldGoal" onClick={props.sucks}>Away Field Goal</button>
//         </div>
//   )
// }
// class App extends Component{
//     render(){
//         return (
//             <div className="awayButtons">
//                   <button className="awayButtons__touchdown" onClick={props.sucks1}>Away Touchdown</button>
//                   <button className="awayButtons__fieldGoal" onClick={props.sucks}>Away Field Goal</button>
//                 </div>
//           )  
//     }
// }
const AwayScore = (props) => {
    // const [point, setPoint] = useState(0);
    // const sucks1 = e => {
    //     setPoint(point + 7);
    //   };
    //   const sucks = e => {
    //     setPoint(point + 3);
    //   };
     
    
    return(

      <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={props.sucks1}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={props.sucks}>Away Field Goal</button>
            
          </div>
    )
  }
  
export default AwayScore;