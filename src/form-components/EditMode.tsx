import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editMode, setMode] = useState<boolean>(false);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="update-edit-mode"
                label="edit mode"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode && (
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="student"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
            {editMode && <Form.Control value={name} onChange={updateName} />}
            {isStudent ?
                <div> {name} is a student.</div>
            :   <div> {name} is not a student</div>}
        </div>
    );
}
