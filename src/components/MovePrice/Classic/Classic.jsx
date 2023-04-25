import { useState } from "react";
import GetQuote from "../GetQuote/GetQuote";

const Classic = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isPrice, setIsPrice] = useState();
  const [isOption, setIsOption] = useState();
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setIsOption('4 movers & truck');
    setIsPrice('$179 cash/$189 credit')

  }


  return (
<>
{isOpen && <GetQuote handleClose={togglePopup}  option="4 movers & truck" price="$179 cash/$189 credit"/>}
<div className="priceCrad">
    <div className="priceHead">
    <h6>4 movers & truck </h6>
        <h4>$179 cash *</h4>
        <h4>$189 credit *</h4>
        <p>per hour</p>
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
    <button onClick={togglePopup}>Get quote</button>
</div>
</>
  )
}

export default Classic