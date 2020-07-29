import React from "react";
import "./style.css";

const CalcForm = () => (
    <>
        <div className="calcForm">
            <form className="calcForm__form">
                    <input
                        className="calcForm__value calcForm__value--amount calcForm__value--amount1"
                        name="valueAmount1"
                    />
                <select
                    className="calcForm__value calcForm__value--type calcForm__value--type1"
                    name="valueType1">
                    <option>PLN</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <p className="empty"></p>

                <button
                    type="button"
                    className="calcForm__button"
                ></button>

                    <input
                        className="calcForm__value calcForm__value--amount calcForm__value--amount2"
                        name="valueAmount2"
                        readOnly
                    />
                <select
                    className="calcForm__value calcForm__value--type calcForm__value--type2"
                    name="valueType2">
                    <option>PLN</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

            </form>

            <div className="calcForm__textResult"></div>
        </div>
    </>
);

export default CalcForm;