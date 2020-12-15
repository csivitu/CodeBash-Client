import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectRoomUsers } from '../../redux/roomPersist/roomPersist.selector';

import MemberBox from '../member-box/member-box.component';

import './members-list.styles.css';

const MembersList = ({ members }) => (
    <div className="members-list">
        {
            members.map((member, i) => (
                <div key={i}><MemberBox name={member.username} /></div>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    members: selectRoomUsers 
})

export default connect(mapStateToProps)(MembersList);
