import React from 'react';
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 0, followed: false, name: 'Igor', status: 'Iam Hungry', location: { city: 'Samara', country: 'Ukrain' } },
            { id: 1, followed: true, name: 'Rodg', status: 'Hi hi, da?', location: { city: 'Ostashkov', country: 'Russia' } },
        ])
    }

    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <div className={classes.users}>
                    <div className={classes.users__container}>
                        <div className={classes.avatar}>
                            <img src={avatar} className={classes.avatarImage} alt='ava' />
                        </div>
                        <div className={classes.body}>
                            <div className={classes.userInfo}>
                                <div className={classes.userName}>
                                    {users.name}
                                </div>
                                <div className={classes.userLocation}>
                                    <div className={classes.userCity}>
                                        {users.location.city}
                                    </div>
                                    <div className={classes.userCountry}>
                                        {users.location.country}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.userStatus}>
                                {users.status}
                            </div>
                            <div className={classes.userConnect}>
                                <div className={classes.userWtireMessage}>
                                    userWtireMessage
                                </div>
                                <div className={classes.userFollow}>
                                    {users.followed
                                        ? <button onClick={() => { props.unFollow(users.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(users.id) }}>Follow</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        {/*         <div className={classes.showMore}>
            <button onClick={showMoreUsers} className={classes.showMore__button}>Show more</button>
        </div> */}
    </div>
};

export default Users;