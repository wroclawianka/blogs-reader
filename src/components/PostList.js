import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";

class PostList extends React.Component {
    render() {
        return <h1>Post List</h1>
    }
}

export default connect(
    null,
    {fetchPosts}
)(PostList);
// null, as there is not data to pass to this component. there should be only mapStateToProps statement