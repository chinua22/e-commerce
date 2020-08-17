import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(products) => {
                    console.log(products);
                    const title =
                        products.products.length > 0 &&
                        products.products.map((product) => (
                            <div className="container py-5">
                                {/* title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{product.title}</h1>
                                    </div>
                                </div>
                                {/* title ends */}

                                {/* product image */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img
                                            src={product.image}
                                            className="img-fluid"
                                            alt="product"
                                        />
                                    </div>
                                    {/* product design */}
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                                        <h2> design: {product.title}</h2>
                                        <h4 classname="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by:
                                            <span className="text-uppercase">
                                                {product.category}
                                            </span>
                                        </h4>
                                        <h4 className="text-blue ">
                                            <strong>
                                                price: <span>$</span>
                                                {product.price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalise font-weight-bold mt-3 mb-0">
                                            some info about product:
                                        </p>
                                        <p class="text-muted lead">
                                            {product.description}
                                        </p>

                                        {/* buttons */}
                                        <div>
                                            <Link to="/">
                                                <ButtonContainer>
                                                    back to product
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                cart
                                                disabled={
                                                    "cart-btn" ? true : false
                                                }
                                                onClick={() => {
                                                    products.addToCart();
                                                }}
                                            >
                                                Add to Cart
                                            </ButtonContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ));
                    return (
                        <div className="output">
                            <div className="row font-weight-bold">{title}</div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}
