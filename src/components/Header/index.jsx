import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import rasm from "../../../assets/imaages/image0.jpg"

const index = () => {
	return (
		<header className="bg-[#0f0f1c]">
			<div className="container flex justify-between items-center h-[80px]">
				<a href="/">
					<img src={rasm} alt="NitronUz" className="w-[50px] h-[50px]" />
				</a>
				<nav className="" aria-label="Global">
					<div className="">
						<NavLink
							to="/"
							className="text-sm font-semibold py-3 px-5 leading-6 text-white"
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className="text-sm font-semibold  py-3 px-5 leading-6 text-white"
						>
							About
						</NavLink>
						<NavLink
							to="/team"
							className="text-sm font-semibold py-3 px-5 leading-6 text-white"
						>
							Team
						</NavLink>
						<NavLink
							to="/contact"
							className="text-sm font-semibold py-3 px-5 leading-6 text-white"
						>
							Contact
						</NavLink>
					</div>
				</nav>
				<Link to="/about">
					<button className=" px-14 rounded-lg py-3 bg-slate-500">About</button>
				</Link>
			</div>
			<hr />
		</header>
	);
};

export default index;
