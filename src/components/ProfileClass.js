import React from 'react';

class ProfileClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            userInfo:{
                name: "Dummy Name",
                login: "Dummy Location",
                avatar_url:"",
            },
        };

        console.log("contructor")
    }

   async componentDidMount(){
        console.log("componentDidMount");

        this.interval = setInterval(()=>{
            console.log("namaste React op");
        },1000);

        console.log("child componentDidMount");

        const data = await fetch("https://api.github.com/users/jrushi2010")

        const json = await data.json();

        this.setState({
            userInfo: json,
        });

    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                <h2>Profile class component</h2>
                <img src={this.state.userInfo.avatar_url}/>
                <h3>Name: {this.state.userInfo.name}</h3>
                <h4>Location: {this.state.userInfo.login}</h4>
            </div>
        )
    }
}

export default ProfileClass;