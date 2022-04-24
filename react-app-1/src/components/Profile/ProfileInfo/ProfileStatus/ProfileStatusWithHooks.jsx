import React, { useEffect, useState } from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = React.memo((props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

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

    const enterKey = event => {
        if (event.key === 'Enter') {
            deAtcivateAdditMode()
        }
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
                        onKeyDown={enterKey}
                    />
                </div>
            }
        </div>
    );
});

export default ProfileStatusWithHooks;