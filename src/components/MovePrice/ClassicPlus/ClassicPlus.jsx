import { useState } from "react";
import GetQuote from "../GetQuote/GetQuote";


const ClassicPlus = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isPrice, setIsPrice] = useState();
  const [isOption, setIsOption] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setIsOption('3 movers & truck');
    setIsPrice('$144 cash/$154 credit')

  }


  return (
    <>
    {isOpen && <GetQuote handleClose={togglePopup}  option="3 movers & truck" price="$144 cash/$154 credit" />}
        <div className="priceCrad" id="classicPlus">
    <div className="priceHead">
        <h6>3 movers & truck</h6>
        <h4>$144 cash *</h4>
        <h4>$154 credit *</h4>
        <p>per Hour</p>
    </div>
    <div className="priceOptions">
    <li>Truck</li>
        <li>Taxes included</li>
        <li>Packing and unpacking</li>
        <li>Dis-/Reassembling of furniture</li>
        <li><b>Free shrink wrap + packing tape</b></li>
        <li><b>Free use: wardrobe boxes + blankets</b></li>
        <li>All necessary supplies included</li>
        <li>All costs in and no surprise fees</li>
        <li>Promos and discounts</li>
    </div>
    <button onClick={togglePopup}>Get quote test</button>
</div>
    </>

  )
}

export default ClassicPlus