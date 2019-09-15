import React from 'react'
import {connect} from 'react-redux'
 class About extends React.Component{
     render(){
        console.log('About Page =========>',this.props.data)
         return(
            <div>
                  <center>
                 <h1>About Page</h1>

                 <button style={{backgroundColor: "#008CBA", padding:"5px 32px" ,border: "none",color:'white'}} onClick={()=>this.props.history.push("/")}>Home</button>

             </center>

<br />
             <table className="table">
  <tr className="tr">
    <th className="th">Name</th>
    <th className="th">Father Name</th>
    <th className="th">Age</th>
    <th className="th"> Address</th>
  </tr>
  <tr className="tr">
    <td className="tr">{this.props.data.name}</td>
    <td className="tr">{this.props.data.fatherName}</td>
    <td className="tr">{this.props.data.age} </td>
    <td className="tr">{this.props.data.address}</td>
  </tr>

</table>

            </div>
         )
     }
 }

const mapStateToProps = (state,comany)=>{
    console.log('About Page =========>',state)
return {
    data : state
}
}

 export default connect(mapStateToProps,null)(About)