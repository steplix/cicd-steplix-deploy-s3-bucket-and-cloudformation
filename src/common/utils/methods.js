
/**
 * @param {string} title
 * @returns {object} { title: string, outlined: string }
 */
export const getOutlinedTitle = (title) => {
		
	const titleArray = title.split(" ");

	if (titleArray.length > 1) {
		const outlined = titleArray.slice(-1);
		titleArray.pop();
		const title = titleArray.join(" ")

		return {
			title,
			outlined,
		};
	}

	return {
		title: titleArray.shift(),
		outlined: "",
	};
};

export const repeatImageLogos = (images, times) => {
	const repeatedImages = [];
	for (let i = 0; i < times; i++) {
		repeatedImages.push(...images);
	}
	return repeatedImages;
};

export const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text);
};

export const openLink = (url) => {
	window.open(url, "_blank");
};

export const getShortBreakpoint = (width) => {
	switch (true) {
		case width < 640:
			return 'xs';
		
		case width >= 640 && width < 768:
			return 'sm';

		case width >= 768 && width < 1024:
			return 'md';
	
		case width >= 1024 && width < 1280:
			return 'lg';

		case width >= 1280:
			return 'xl';
	}
}
