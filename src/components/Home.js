import React from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router';
import getResources from '../utils/api_handler';
import CardC from './CardC';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.resources = [];
        this.state = {
            filtered_resources: [],
        }
    };

    async componentDidMount() {
        this.resources = await getResources();
        this.setState({
            filtered_resources: this.resources,
        });
    };

    handleOnClick = (resource_card) => {
        this.props.history.push({
            pathname: `/resources/:${resource_card.id}`,
            state: {
                resource: resource_card,
            },
        });
    };

    render() {
        return ( 
            <>
            <div className = 'container' >
                <Row >
                    <Col gutter = {{ xs: 8, sm: 16, md: 24, lg: 32 }} className = "card-container" >
                        <Row justify = "center" > {
                            this.state.filtered_resources.map((e, idx) =>
                                <CardC resource = { e }
                                detailed = { false }
                                handleClick = { this.handleOnClick }
                                key = { idx }
                                />
                            )
                        } 
                        </Row> 
                    </Col > 
                </Row> 
            </div > 
            </>
        );
    }
}

export default withRouter(Home);