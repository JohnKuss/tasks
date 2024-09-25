import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, cycleHoliday] = useState<string>("🎅");
    let holidaysAlph: string[] = ["🎅", "🎃", "🎆", "⚒️", "🦃"];
    let holidaysYear: string[] = ["🎆", "⚒️", "🎃", "🦃", "🎅"];
    function advanceAlphabet(): void {
        cycleHoliday(
            holidaysAlph[
                (holidaysAlph.indexOf(holiday) + 1) % holidaysAlph.length
            ],
        );
    }
    function advanceYear(): void {
        cycleHoliday(
            holidaysYear[
                (holidaysYear.indexOf(holiday) + 1) % holidaysYear.length
            ],
        );
    }
    return (
        <div>
            Cycle Holiday
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
