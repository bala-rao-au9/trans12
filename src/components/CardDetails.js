import React from 'react';
import { Card } from 'antd';
import './CardDetails.css';
import getResources from '../utils/api_handler';

class CardDetails extends React.Component{
    constructor(props){
        super(props);
        this.resources=[];
        this.state={
            card:[],
        }
    }

    async componentDidMount(){
        this.resources=await getResources();
        let id;
        if(this.props.id){
            id = this.props.id.split('');
            id = id[1]-1;
        }else{
            id=this.props.resource.id-1;
        }

        this.setState({
            card:this.resources[id],
        })
    };

     render(){
        const resource = this.state.card;
        const color = resource.color;
        return( 
                <div className='container'>
                    <Card className='card_detailed_container' style={{backgroundColor:color}} hoverable>
                        <div className='content'>
                            <h4>{resource.name}</h4>
                            <h4>{resource.year}</h4>
                        </div>
                        
                        <h5 className='pantone_value'>pantone_value</h5>
                        
                        <h4>{resource.pantone_value}</h4>
                    </Card>
                </div>
        );
    };
}

export default CardDetails;