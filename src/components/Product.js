import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Product extends Component {
    render() {
        const { id, title, image, price } = this.props.product;
        return (
            <ProductWrapper className="col-9 col-md-6 col-lg-3 m-7 my-3">
                <div className="card">
                    <div
                        className="img-container p-20"
                        onClick={() => console.log("Hello you clicked")}
                    >
                        <Link to="/details">
                            <img
                                src={image}
                                alt="bird"
                                className="card-img-top rounded-lg mx-auto d-block"
                            />
                        </Link>
                        <button className="cart-btn " onClick>
                            <i className="fas fa-cart-plus" />
                        </button>
                    </div>
                    {/* card footer */}
                    <div className="d-flex justify-content-between ">
                        <p className="align-self-center mx-2 mb-2">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-3">${price}</span>
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

export const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
        width: 100%;
        height: 400px;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background: rgba(247, 247, 247);
        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .card-img-top {
        width: 200px;
        height: 260px;
        z-index: 10;
        padding: 30px;
        transition: all 1s linear;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5 0 0 0;
        transition: all 1s linear;
        transform: translate(100%, 100%);
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn :hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`;
