import React from 'react';

class Navbar extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-sm scrolling-navbar fixed-top navbar-dark bg-dark">
                    <div className="container">
                        <a href="#" className="navbar-brand"><i className="fa fa-seedling fa-2x"></i>Ultimate Vacations</a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#simple-nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="simple-nav">
                            <ul className="navbar-nav ml-auto d-flex align-items-center">
                                <li className="nav-item px-2">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a href="#" className="nav-link">About</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a href="#" className="nav-link">Destinations</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a href="#" className="nav-link">Contact</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a href="#" className="btn btn-danger text-dark font-weight-bold">Book Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

}

export default Navbar;