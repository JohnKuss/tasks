import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quizAttempts, updateAttempts] = useState<number>(4);
    const [quizProgress, updateProgress] = useState<boolean>(false);
    function quizStart(): void {
        updateProgress(!quizProgress);
        updateAttempts(quizAttempts - 1);
    }
    function quizStop(): void {
        updateProgress(!quizProgress);
    }
    function mulligan(): void {
        updateAttempts(quizAttempts + 1);
    }

    return (
        <div>
            <Button
                onClick={quizStart}
                disabled={quizProgress || quizAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={quizStop} disabled={!quizProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizProgress}>
                Mulligan
            </Button>
            <div>{quizAttempts}</div>
        </div>
    );
}
