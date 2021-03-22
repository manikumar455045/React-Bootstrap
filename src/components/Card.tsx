import React from 'react';
import card1 from "../Assets/images/card_1.jpg";
import card2 from "../Assets/images/card_2.jpg";
import card3 from "../Assets/images/card_3.jpg";
import CardProps from "./CardProps";

interface Iprops{

}
interface  Istate{
    heading : string;
    text: string;
}


class Card extends React.Component<Iprops, Istate> {
    constructor(props:Iprops) {
        super(props);
        this.state = {
            heading : "Our Tourist Locations",
            text: "Tourism is vital for the success of many economies around the world. There are several benefits of tourism on host destinations. Tourism boosts the revenue of the economy, creates thousands of jobs, develops the infrastructures of a country, andplants a sense of cultural exchange between foreigners and citizens."
        }
    }
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <section className="mt-2">
                <div className="container p-2">
                    <div className="row text-center">
                        <div className="col">
                            <h1>{this.state.heading}</h1>
                            <p>{this.state.text}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                           <CardProps heading="Paris" img={card1}/>
                        </div>
                        <div className="col-md-4">
                            <CardProps heading="Malaysia" img={card2}/>
                        </div>

                        <div className="col-md-4">
                            <CardProps heading="Bali" img={card3}/>
                        </div>

                </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Card;