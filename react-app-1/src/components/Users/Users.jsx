import React from 'react';
import classes from './Users.module.css';


const Users = (props) => {

    return <div className={classes.friends}>
               {
                    props.users.map(users => <div key={users.id}>
                        
                    </div>)
                }
            </div>
};

export default Users;