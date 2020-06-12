import React ,{Component } from 'react';
import {connect} from 'react-redux';
import {
    getTest,
    show,
} from '../actions';

class Test extends Component {
    
    componentDidMount(){
        this.props.getTest(1);
        this.props.show(0);
    };
    render(){
        return (
            <div align="center">
                <h1>TEST</h1>
                <ul>TOTAL MARKS : {this.props.marks}</ul>
                <ul>QUESTION : {this.props.question}</ul>
                <ul>OPTIONS : {this.props.options.map((value, index) => {
                            return <button key={index} onClick = {this.props.show(1)}>{value}</button>
                        })}
                </ul>
                <ul>TYPE : {this.props.type}</ul>
                <ul>{this.props.showAnswer}</ul>
                {this.props.showAnswer ? <ul>ANSWER : {this.props.answer}</ul> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.test;
}
const mapDispatchToProps = {
    getTest,
    show
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);