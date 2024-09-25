import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, showAnswer] = useState<boolean>(false);
    function flipAnswer(): void {
        showAnswer(!answer);
    }
    return (
        <div>
            <Button onClick={flipAnswer}>Reveal Answer</Button>
            {answer && <div>42</div>}
        </div>
    );
}
