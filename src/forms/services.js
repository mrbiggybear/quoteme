import { useState } from "react";

export function Services() {

    let service_options = [
        { 'id': 0, 'name': "Battery", 'selected': false },
        { 'id': 1, 'name': "Oil Change", 'selected': false },
        { 'id': 2, 'name': "A/C Check", 'selected': false }
    ];

    function render_service_options() {
        return service_options.map(
            (item) => {
                console.log(item.name);
                return <p>{item.name}
                    <input
                        key={item.id}
                        type='checkbox'
                        name={item.name}
                    // defaultChecked={false}
                    ></input>
                </p>
            }
        );
    }

    return (
        <div>
            <h3>Service Options</h3>
            <label>
                {render_service_options()}
            </label>
        </div>
    );
}

export function DropOff() {

    let drop_off_option = [
        "drop-off",
        "wait"
    ];

    return (
        <div>
            <label>
                <h4>
                    Dropping off?
                </h4>
                <select name="drop-off-options">
                    {drop_off_option.map((option, idx) =>
                        <option key={idx} value={option}>{option}</option>
                    )}
                </select>
            </label>
        </div>
    );
}