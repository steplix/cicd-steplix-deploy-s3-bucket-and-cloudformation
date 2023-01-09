
/**
 * @param {string} title
 * @returns {object} { title: string, outlined: string }
 */
export const getOutlinedTitle = (title) => {
	const titleArray = title.split(" ");

	if (titleArray.length > 1) {
		const outlined = titleArray.at(-1);
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
