import { useState } from "react";
import Basic from './Basic/Basic'
import Classic from './Classic/Classic'
import ClassicPlus from './ClassicPlus/ClassicPlus'
import GetQuote from "./GetQuote/GetQuote";
import './moveprice.css'
import './movepricemedia.css'

const MovePrice = () => {

    return (
        <div className="container mt150" id='price'>               
            <h2>Moving Price</h2>
            <div className="wrap mt50">
                <Basic />
                <ClassicPlus />
                <Classic />
  
            </div>
        </div>
    )
}

export default MovePrice