import './getquotemodal.css'
import { postEmail } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const GetQuote = (props) => {

    const [stateFrom, setStateFrom] = useState();
    const [stateTo, setStateTo] = useState();
    const [username, setUsername] = useState();
    const [useremail, setUseremail] = useState();
    const [userphone, setUserphone] = useState();
    const [usermessage, setUsermessage] = useState();
    const [userdate, setUserdate] = useState();
    const [usermovesize, setUsermovesize] = useState();
    const [useroption, setUseroption] = useState(props.option);
    const [userprice, setUserprice] = useState(props.price);

    const [isQuote, setIsQuote] = useState('Get quote');
    const navigate = useNavigate();

    const handleSend = async () => {
        setIsQuote("Sending..")
        try {
            await postEmail(new URLSearchParams({
                state_from: stateFrom,
                state_to: stateTo,
                message: usermessage,
                move_size: usermovesize,
                move_date: userdate,
                full_name: username,
                email: useremail,
                phone: userphone,
                option: useroption,
                price: userprice

            }))

            document.getElementById('sendQuote').style.cssText = `
            background-color: #00FF00!important;`;
            setIsQuote("Success");

            setTimeout(() => {
                document.getElementById("myQuoteForm").reset();
                document.getElementById('sendQuote').style.cssText = `background-color: #FF001F; `;
                setIsQuote("Get quote");
                navigate('checkout')
            }, 2000);

        }
        catch (error) {
            setIsQuote("Something wrong ((")
            console.log(error);
            let err_fields = []
            const errs = error.response.data.detail;
            errs.forEach(err => {
                err_fields.push(err.loc[1])
                if (err_fields === 'email') {
                    document.getElementById('email').style.border = '1px solid red';
                }
                if (err_fields === 'phone') {
                    document.getElementById('phone').style.border = '1px solid red';
                }
                if (err_fields === 'full_name') {
                    document.getElementById('fullname').style.border = '1px solid red';
                }
                if (err_fields === 'message') {
                    document.getElementById('message').style.border = '1px solid red';
                }
            });

        }

    }

  return (
    <> 

     <div  className="quotemodal-window" >
     <div className='vual' onClick={props.handleClose}></div>
    <div className='modal-box container' id="getQuote">
        

        <form onSubmit={(e) => { e.preventDefault() }} id='myQuoteForm'>
                <div className="mainForm">
                    <div className="formBody">                       
                       <div className='quotehead'> <h4>Get efficient quote:</h4> <p>{props.option}</p></div>
                        <div className="wrapper">
                            <div className="formBodyOne">
                                <input id="movefrom" type="text" placeholder="Moving From" onChange={(e) => setStateFrom(e.target.value)} />
                                <input id="moveto" className="inputMt10" type="text" placeholder="Moving To" onChange={(e) => setStateTo(e.target.value)} />

                            </div>
                            <div className="formBodyOne">
                                <input id="fullname" type="text" name="name" placeholder="Full name" required onChange={(e) => setUsername(e.target.value)} />
                                <div className="wrapper infowrap">
                                    <input id="email" className="inputMt10" type="mail" name="mail" placeholder="Email" required onChange={(e) => setUseremail(e.target.value)} />
                                    <input id="phone" className="inputMt10" type="tel" name="phone" placeholder="Phone" required onChange={(e) => setUserphone(e.target.value)} />
                                </div>
                            </div>
                            <div className="formBodyOne">
                                <div className="wrapper flexdrclmnn">
                            
                                       <input id="datebtn" type="date" name="date" className="dateclass placeholderclass" placeholder="Date" required onChange={(e) => setUserdate(e.target.value)}></input>
                                    
                                    <select required onChange={(e) => setUsermovesize(e.target.value)}>
                                        <option hidden>Move Size</option>
                                        <option>1 bedroom</option>
                                        <option>2 bedroom</option>
                                        <option>3 bedroom</option>
                                        <option>Commercial</option>
                                        <option>Studio</option>
                                        <option>Storage</option>
                                        <option>other</option>
                                    </select>
                                </div>
                               
                                <button id="sendQuote" className="btn mainBtn" type="submit" onClick={handleSend}>{isQuote}</button>

                            </div>
                        </div>

                    </div>
                    <div className="glass"></div>
                </div>
            </form>
    </div>
</div>
    </>
  
  )
}

export default GetQuote