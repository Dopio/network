import React from "react";
import classes from './PagesList.module.css';


const PagesList = React.memo(({pages, currentPage, onPageChanged}) => {
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