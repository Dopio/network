import React, { useEffect, useState } from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = React.memo(({statusFromProps, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(statusFromProps)

    useEffect(() => {
        setStatus(statusFromProps);
    }, [statusFromProps]);

    const atcivateAdditMode = () => {
        setEditMode(true);
    };

    const deAtcivateAdditMode = () => {
        setEditMode(false);
        updateStatus(status);
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
                    <span onDoubleClick={atcivateAdditMode}>{statusFromProps || 'Some status'}</span>
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