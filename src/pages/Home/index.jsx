import Header from "../../components/Header";
import Footer from "../../components/Footer";
import rasm from "../../../assets/imaages/image0.jpg"
import About from "../About/index"
import { Link } from "react-router-dom";
import TypingTextAnimation from "../../components/UI/animation"

const index = () => {


	return (
		<>
			<Header />

			<section className="bg-[#0f0f1c]">
				<div className="container min-h-screen">
					<div className="wrapper pt-[300px] flex justify-between ">
						<div className="left relative">
							<TypingTextAnimation />
							<h4 className="text-white text-2xl mt-14 mb-6">
								Freelance group
							</h4>
							<p className="text-white text-lg max-w-2xl mb-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
								consequatur atque rerum repudiandae, deserunt facere ipsam,
								perferendis quia libero sunt sequi ea animi tempora, vel quo
								earum laboriosam aliquid quos omnis fuga. Optio officia
								voluptates voluptatum fugit rerum eos tempore!
							</p>
							<div>
								<Link to="/about">
									<button className=" px-14 rounded-lg py-3 bg-slate-500">
										About
									</button>
								</Link>
								<button></button>
							</div>
						</div>
						<div className="right">
							<img src={rasm} alt="Logo" />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default index;
