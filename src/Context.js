import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.state = {
            // detailProduct: detailProduct,
            products: [],
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((dot) => {
                this.setState({
                    products: dot,
                });
            });
    }

    handleDetail = () => {
        console.log("hello from detail");
    };
    addToCart = () => {};

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
