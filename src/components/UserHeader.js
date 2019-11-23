import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const {user} = this.props.user;
        return (!user) ? null : (
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.filter(user => user.id === ownProps.userId)}
};

export default connect(
    mapStateToProps
)(UserHeader);