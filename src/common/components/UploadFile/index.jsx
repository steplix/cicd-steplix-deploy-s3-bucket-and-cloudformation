import React from "react";
import PropTypes from "prop-types";

const UploadFile = ({ text }) => {
    const handleAddFile = () => {};

    return (
        <div>
            <input type="file" className="hidden" />
            <label>
                <input
                    accept="image/png, image/jpg, application/pdf"
                    className="hidden"
                    id={"contained-button-file"}
                    type="file"
                    onChange={handleAddFile}
                />
                <div className="input-file">
                    <span className="lg:flex lg:w-[1200px] justify-left lg:ml-40 lg:text-2xl text-sm text-steplix-yellow underline decoration-2 mt-2">
                        {text}
                    </span>
                </div>
            </label>
        </div>
    );
};

//
//PropsTypes
//
UploadFile.propTypes = {
    text: PropTypes.string.isRequired,
};
export default UploadFile;
