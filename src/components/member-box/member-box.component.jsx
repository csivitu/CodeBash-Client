import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './member-box.styles.css';

const MemberBox = ({ name }) => (
    <div className="member-box">
        <IconContext.Provider value={{ color: 'green', className: 'icon-div' }}>
            <div>
                <FaCircle />
            </div>
        </IconContext.Provider>
        <div className="name">
            {name}
        </div>
    </div>
);

export default MemberBox;
