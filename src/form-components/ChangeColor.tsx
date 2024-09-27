import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [colorSelected, setColor] = useState<string>(colors[0]);
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name={color}
                    id={color}
                    label={color}
                    value={color}
                    style={{ backgroundColor: color }}
                    checked={color === colorSelected}
                    onChange={changeColor}
                />
            ))}
            <body>
                You have chosen{" "}
                <body
                    data-testId="colored-box"
                    style={{ backgroundColor: colorSelected }}
                >
                    {colorSelected}.
                </body>
            </body>
        </div>
    );
}
