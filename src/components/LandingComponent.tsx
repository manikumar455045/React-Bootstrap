import React, {ReactNode} from 'react';

class LandingComponent extends React.Component<any,any> {
    render(): ReactNode {
        return (
            <React.Fragment>
                <div className="Landing-div">
                    <div className="Landing-wrapper d-flex flex-column justify-content-center align-items-center h-100 text-white text-center">
                        <h1>React with Bootstrap</h1>
                        <p className="pl-3 pr-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias consectetur doloremque doloribus, eos ex id ipsam ipsum laboriosam minus mollitia quas, quis recusandae, rerum sequi velit voluptas voluptatum?</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingComponent;