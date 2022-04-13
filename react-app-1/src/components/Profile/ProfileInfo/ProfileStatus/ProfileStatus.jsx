import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    atcivateAdditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deAtcivateAdditMode = () => {
        this.setState({
            editMode: false
        });
    };

    render() {
        return (
            <div className={classes.wrapper}>
                {this.state.editMode === false ?
                    <div className={classes.status__text}>
                        <span onDoubleClick={this.atcivateAdditMode.bind(this)}>{this.props.status}</span>
                    </div>
                    :
                    <div className={classes.status__input}>
                        <input type="text" value={this.props.status} autoFocus onBlur={this.deAtcivateAdditMode.bind(this)}/>
                    </div>
                }
            </div>
        );
    };
};

export default ProfileStatus;