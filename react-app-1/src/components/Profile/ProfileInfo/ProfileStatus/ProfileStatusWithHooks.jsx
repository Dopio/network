import React, { useState } from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    /* let stateWithSetState = useState(true);
    let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]; */

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const atcivateAdditMode = () => {
        setEditMode(true);
    };

    const deAtcivateAdditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={classes.wrapper}>
            {!editMode &&
                <div className={classes.status__text}>
                    <span onDoubleClick={atcivateAdditMode}>{props.status || 'Some status'}</span>
                </div>
            }
            {editMode &&
                <div className={classes.status__input}>
                    <input
                        onChange={onStatusChange}
                        type="text"
                        value={status}
                        autoFocus
                        onBlur={deAtcivateAdditMode}
                    />
                </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;