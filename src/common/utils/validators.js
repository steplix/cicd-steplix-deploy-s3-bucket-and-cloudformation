export const isAsset = (image) => {
  return image.includes('assets') || image.includes('public') || image.includes('static');
};
