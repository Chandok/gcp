import React from 'react';


function IsAuthenticated(props) {
    sessionStorage.setItem('gcsd',{})
    const session = sessionStorage.getItem("gcsd");
    if(session){
        
    }



  return(<React.Fragment>
      {props.children}
    </React.Fragment>);
}

export default IsAuthenticated;
