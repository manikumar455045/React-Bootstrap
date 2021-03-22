import React from 'react';


interface Iprops{
    heading? : string;
    img? : string;
}
interface Istate{
}
class CardProps extends React.Component<Iprops, Istate>{

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <section className="">
                    <div className="card">
                        <img src={this.props.img} className="img-fluid" alt=""/>
                        <div className="card-body">
                            <h1>{this.props.heading}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum incidunt ipsum labore minus perferendis placeat praesentium quidem reiciendis unde!</p>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default CardProps;