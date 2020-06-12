import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom' ;
import {
    getTestList
} from '../actions';

class List extends Component {
    componentDidMount(){
        this.props.getTestList();
    }
    render(){
        return (
            <div align="center">
                <ul>
                    <Link to="/test/">
                        {this.props.test.map((value, index) => {
                            return <button key={index}>{value}</button>
                        })}
                    </Link>
                </ul>
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