export const getOutlinedTitle = (title) => {
  const titleArray = title.split(" ");

  if (titleArray.length > 1) {
    const outlined = titleArray.pop();
    return {
      title: titleArray.join(" "),
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
