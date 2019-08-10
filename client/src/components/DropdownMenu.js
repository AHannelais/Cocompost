import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class DropdownMenu extends Component {
    state = {showMenu : false}

    onShowMenu = (e) => {
        e.preventDefault()
        this.setState({showMenu : true})
    }
    onHideMenu = (e)=> {
        e.preventDefault()
        this.setState({showMenu : false})
    }
  
    
  render() {
    return (
      <div onMouseLeave={this.onHideMenu}> 
        <div className="btn btn-primary" onMouseOver={this.onShowMenu} >
          Menu
        </div>
        {this.state.showMenu ?  
     ( <div className="menu">
          <Link to='/'> Menu item 1 </Link>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
     </div> )
         : (null )} 
       
      </div>
    );
  }
}
export default DropdownMenu