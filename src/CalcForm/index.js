import React from "react";
import "./style.css";

const CalcForm = () => (
    <form className="calcForm">
        <label>
            <input
                className="calcForm__value calcForm__value--amount"
                name="valueAmount1" />
        </label>
        <select
            className="calcForm__value calcForm__value--type"
            name="valueType1">
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
        </select>

        <button
            type="button"
            className="calcForm__button"
        ></button>

        <label>
            <input
                className="calcForm__value calcForm__value--amount"
                name="valueAmount2"
                readOnly />
        </label>
        <select
            className="calcForm__value calcForm__value--type"
            name="valueType2">
            <option>PLN</option>
            <option>EUR</option>
            <option>USD</option>
        </select>

        <div className="calcForm__textResult"></div>
    </form>
);

export default CalcForm;