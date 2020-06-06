import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    componentDidMount(){
        if(this.props.isAuthenticated){
          this.props.history.push('/dashboard')
        }
      }
    render() {
        return (
            <section className='landing'>
                <div className='dark-overlay'>
                    <div className='landing-inner'>
                        <h1 className='x-large'>Developer Connector</h1>
                        <p className='lead'>
                            Create a developer profile/portfolio, share posts and get help from
                            other developers
                        </p>
                        <div className='buttons'>
                            <Link className="btn btn-success mr-2" to="/register">SignUp</Link>
                            <Link className="btn btn-light" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
