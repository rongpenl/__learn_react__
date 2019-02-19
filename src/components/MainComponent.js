import React, { Component } from 'react';
import Menu from './MenuComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container col-12">
                    <Menu dishes={this.state.dishes}
                        onClick={(dishId) => this.onDishSelect(dishId)} />
                </div>
                <div className="container col-12">
                    <DishDetail dish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish)[0]} />
                </div>
                <div className="container col-12 col-md-10 m-1">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Main;
