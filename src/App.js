import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import GetQuote from "./components/GetQuote/GetQuote";
import HighReview from "./components/HighReview/HighReview";
import Home from "./components/Home/Home";
import MovePrice from "./components/MovePrice/MovePrice";
import Review from "./components/Review/Review";
import Sevices from "./components/Services/Sevices";
import TopBtn from "./components/TopBtn/TopBtn";
import Video from "./components/Video/Video";


import "./index.css";
function App() {
	return (
		<div className="App">
			<TopBtn/>
			<Home />
			<GetQuote />
			<Sevices />
			<MovePrice/>
			<Review />
			<Video/>
			<HighReview/>
			<Faq />
			<Footer />
		</div>
	);
}

export default App;
