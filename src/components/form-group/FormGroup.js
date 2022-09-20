import React from "react";
import Input from "../Input/Input";
import "./form-group.scss";

const FormGroup = (props) => {
    const { id, formLabel, customClass } = props;

    let formInputId = "input" + Math.random();

    return (
        <div className={`form-group ${customClass || ""}`}>
            <label htmlFor={id || formInputId}>
                {formLabel || "label text"}
            </label>
            <Input id={id || formInputId} {...props} />
        </div>
    );
};

export default FormGroup;
