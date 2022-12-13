export const getOutlinedTitle = (title) => {
    const titleArray = title.split(" ");
    
    if (titleArray.length > 1) {
        const outlined = titleArray.pop();
        return {
            title: titleArray.join(" "),
            outlined
        }
    }

    return {
        title: titleArray.shift(),
        outlined: ""
    }
}