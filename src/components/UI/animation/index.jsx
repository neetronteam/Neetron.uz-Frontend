
import React, { useState, useEffect } from "react";

function TypingTextAnimation() {
	const [text, setText] = useState("");
	const fullText = "Hi , This is a NeetronUz team";
	const typingSpeed = 120; // Adjust the speed of typing

	useEffect(() => {
		let currentIndex = 0;
		let typingInterval;

		const startTyping = () => {
			typingInterval = setInterval(() => {
				if (currentIndex <= fullText.length) {
					setText(fullText.slice(0, currentIndex));
					currentIndex++;
				} else {
					clearInterval(typingInterval);
					currentIndex = 0;
					setText("");
					startTyping();
				}
			}, typingSpeed);
		};

		startTyping();

		return () => {
			clearInterval(typingInterval);
		};
	}, [fullText, typingSpeed]);

	return (
		<div>
			<h1 className="text-white text-5xl absolute">{text}</h1>
		</div>
	);
}

export default TypingTextAnimation;
