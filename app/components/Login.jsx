import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

export var  Login = (props) => {
    var startLogin = () => {
      var {dispatch} = props;
      dispatch(actions.startLogin());
    };
    return(
        <div className='login-wrapper'>
              <div className='grid-x'>
                <div className='medium-6 medium-offset-3 large-offset-4 large-4 small-10 small-offset-1 cell'>
                  <div className="callout">
                    <h3 className='text-center page-title'>Todo App Login</h3>
                    <h5 className='text-center'>Login with your Github account</h5>

                    <button onClick={startLogin} className='button in-center expanded'>
                    Login with Github
                    </button>
                  </div>
                </div>
              </div>
        </div>
      );
};

export default Redux.connect()(Login);
