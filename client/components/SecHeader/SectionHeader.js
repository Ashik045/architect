import React from 'react';
import style from './sectionHeader.module.scss';

function SectionHeader({ title, text }) {
    return (
        <div className={style.sec_header}>
            <h1 className={style.sec_header_title}>{title}</h1>
            <h4 className={style.sec_header_txt}>{text}</h4>
        </div>
    );
}

export default SectionHeader;
