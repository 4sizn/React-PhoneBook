import FavoriteList from '../components/FavoriteList';
import {connect} from 'react-redux';

export default connect(
    //mapStateToProps
    (state) => ({
        contacts : state.contacts
    })
)(FavoriteList)