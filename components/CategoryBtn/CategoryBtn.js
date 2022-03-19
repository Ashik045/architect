/* eslint-disable react/no-array-index-key */
import React from 'react';
import style from './categorybtn.module.scss';

function CategoryBtn({ categorBtn, filterItems }) {
    return (
        <div className={style.btn_group}>
            {categorBtn.map((btns, index) => (
                <button
                    key={index}
                    className={style.btn}
                    type="button"
                    onClick={() => filterItems(btns)}
                >
                    {btns}
                </button>
            ))}
        </div>
    );
}

export default CategoryBtn;
