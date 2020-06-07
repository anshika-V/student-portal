import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {
    getTestList
} from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getTestList();
    }
    render(){
        return (
            <div>
                <ul>{this.props.test[1]}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.testList;
}
const mapDispatchToProps = {
    getTestList
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);