import React from "react";
import classes from './Pagination.module.css';


const PagesList = React.memo(({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <ul className={classes.usersPageList}>
            {pages.map(page => {
                return (
                    <li key={page} className={currentPage === page
                        ? classes.selectedPage : 'false'}
                        onClick={() => { onPageChanged(page) }}>{page}
                    </li>
                );
            })}
        </ul>
    );
});

export default PagesList;