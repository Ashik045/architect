import React from 'react';
import style from './footercol.module.scss';

function FooterCol({ FooterDetail, title }) {
    return (
        <div className={style.footer_col}>
            <h3>{title}</h3>
            {FooterDetail.map((items) => (
                <p key={items.id}>{items.text}</p>
            ))}
        </div>
    );
}

export default FooterCol;
