import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
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
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        };
    };

    render() {
        return (
            <div className={classes.wrapper}>
                {this.state.editMode === false ?
                    <div className={classes.status__text}>
                        <span onDoubleClick={this.atcivateAdditMode}>{this.state.status || 'Some status'}</span>
                    </div>
                    :
                    <div className={classes.status__input}>
                        <input
                            onChange={this.onStatusChange}
                            type="text"
                            value={this.state.status}
                            autoFocus
                            onBlur={this.deAtcivateAdditMode}
                        />
                    </div>
                }
            </div>
        );
    };
};

export default ProfileStatus;