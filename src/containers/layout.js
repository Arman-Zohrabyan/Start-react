import { connect } from 'react-redux';
import actions from '../actions';

import Layout from '../layout.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    datas: state.information
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: async () => {
      const aaa = await actions.dbActions.getData();
      console.log("aaa", aaa);
      dispatch(actions.nodeClicked(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
