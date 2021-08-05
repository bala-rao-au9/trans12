import React from 'react';
import { Card } from 'antd';
import './CardC.css';

class CardC extends React.Component{
   
    handleOnClick = () => {
        this.props.handleClick(this.props.resource);
    };

    render(){

        const resource = this.props.resource;
        const color = resource.color;
        const classname = this.props.detailed ? 'card_detailed_container' : 'card_container';
        return(
                <Card className={classname} style={{backgroundColor:color}} onClick={this.handleOnClick} hoverable>
                    <div className='content'>
                        <h4>{resource.name}</h4>
                        <h4>{resource.year}</h4>
                    </div>
                    {this.props.detailed && (
                        <div >
                            <h5 className='pantone_value'>pantone_value</h5>
                            <h4>{resource.pantone_value}</h4>
                        </div>
                    )}
                </Card>
        );
    }
}

export default CardC;