import React ,  {Component} from'react'

import { MdDelete} from "react-icons/md";
import { MdExposurePlus1} from "react-icons/md";
import { MdExposureNeg1} from "react-icons/md";
import { MdAutorenew} from "react-icons/md";

class Items extends Component{
constructor(){
    super()
    this.state= { 
        count1:0,
count2:0,
count3:0,

    }
}


incrementCount1 = () =>{
    this.setState(prevState => {
        return {count1 : prevState.count1 + 1,tot_count : prevState + 1}
    })
}
incrementCount2 = () =>{
    this.setState(prevState => {
        return {count2 : prevState.count2 + 1,tot_count : prevState + 1}
    })
}
incrementCount3 = () =>{
    this.setState(prevState => {
        return {count3 : prevState.count3 + 1,tot_count : prevState + 1}
    })
}
decrementCount1=()=>{
    if(this.state.count1 === 0){
        this.setState({
            count1:0
        });}
        else{ 
         this.setState(prevState => {
        return {count1 : prevState.count1 - 1,tot_count : prevState - 1}
            }
        )
}}
decrementCount2= ()=>{
    if(this.state.count2 ===0){
        this.setState({
            count2:0
        });}
               else{    
    this.setState(prevState => {
        return {count2 : prevState.count2 - 1,tot_count : prevState - 1}
        
    })}
}
decrementCount3=()=> {
    if(this.state.count3 === 0){
        this.setState({
            count3:0
        });}
        else{
    this.setState(prevState => {
      
        return {count3 : prevState.count3 - 1,tot_count : prevState - 1}
    })
}
}
resetCount1 =()=>{
    this.setState(count1 =>{
        return {count1 : 0}
    })
}
resetCount2 =()=>{
    this.setState(count2 =>{
        return {count2 :  0}
    })
}
resetCount3 =()=>{
    this.setState(count3 =>{
        return {count3 :  0}
    })
}
reset =()=>{
    this.setState(tot_count =>{
        return {count3  :  0,count1  :  0,count2 :  0}
    })
}
    render(){
    return(
        <div className="content">
            <div class="touchup">
         <p className="icon">  Total :  {this.state.count1 + this.state.count2 + this.state.count3} Items<br />
         <button onClick={() => this.reset()}><MdAutorenew size={25}/></button></p>
         <div className="item">

         {this.state.count1} <i> Item1</i>
<button className="in" onClick={() => this.incrementCount1()}><MdExposurePlus1 size={20}/></button>
<button className="de" onClick={() => this.decrementCount1()}><MdExposureNeg1 size={20}/></button>
<button className="ex" onClick={() => this.resetCount1()}><MdDelete size={20}/></button>
   
         </div>
         <div className="item">
         {this.state.count2} <i>item2</i>
<button className="in" onClick={() => this.incrementCount2()}><MdExposurePlus1 size={20}/></button>
<button className="de" onClick={() => this.decrementCount2()}><MdExposureNeg1 size={20}/></button>
<button className="ex" onClick={() => this.resetCount2()}><MdDelete size={20}/></button>
   
         </div>
         <div className="item">
         {this.state.count3}<i> Item3</i>
<button className="in" onClick={() => this.incrementCount3()}><MdExposurePlus1 size={20}/></button>
<button  className="de" onClick={() => this.decrementCount3()}><MdExposureNeg1 size={20}/></button>
<button  className="ex" onClick={() => this.resetCount3()}><MdDelete size={20}/></button>
</div>
         </div>
        </div>      
    )
}
}
export default Items