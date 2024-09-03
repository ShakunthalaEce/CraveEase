import { Component } from 'react';

class UserClass extends Component{
    
    constructor(props)
    {
        super(props);

        this.state = {
            // count:0,
            details:[],
        };
        // console.log( this.props.name + "child constructor");

    }
    componentDidMount()
    {
        // console.log(this.props.name +"child comp didMount");
        this.userDetails();
        
    }

    async userDetails()
    {
        const userData = await fetch("https://api.github.com/users/ShakunthalaECE");
        const data= await userData.json();
        // console.log(data);

        this.setState({
            details : data,
        })
    }

    componentWillUnmount()
    {
        console.log("Comonent unmounted");
    }
   
    render()
    {
        // console.log(this.props.name +"child render");
        // const{count}=this.state;
        return(
            <div>
                <h1>Class component</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.state.details.name}</h3>
                <h3>{this.state.details.id}</h3>
                {/* <h3>{count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                    });
                }}>Count</button> */}
                
            </div>
            
        )
    }
}

export default UserClass;