
import Header from "./components/Header"
import Principal from "./components/principal"
import CaseStudy from "./components/CaseStudy"
import Technology from "./components/Technology"
import Vision from "./components/Vision"
import Metrics from "./components/Metrics"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"


function App() {
	const [theme, setTheme] = useState('white');

	useEffect(() => {
		const controller = new ScrollMagic.Controller();

		const slides = document.querySelectorAll(".panel-pin");

		slides.forEach(item => {
			let h = item.clientHeight;
			new ScrollMagic.Scene({
					triggerHook: -1,
					triggerElement: item,
					duration: h,
					offset: '-62px'
				})
				.on("leave enter", function (e) {
					let elem = e.target.triggerElement();
					let theme = (elem.dataset.theme) ? elem.dataset.theme : 'white';

					(theme === 'white') ? setTheme('white') : setTheme('black');
				})
				// .addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		});
	}, []);


	return (
		<>
			<Header theme={theme} />
			<Principal />
			<Technology/>
			{/* <Vision />
			<CaseStudy/>
			<Metrics/>
			<Footer/> */}
		</>
	)
}

export default App
