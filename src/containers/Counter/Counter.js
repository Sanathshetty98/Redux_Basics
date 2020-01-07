import React, { Component } from 'react';
import * as action from '../../store/action'
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreCounter}> Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteCounter(strResult.id)}>{strResult.value}</li>
                ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch({type: action.INCREMENT}),
        onDecrementCounter: () => dispatch({type: action.DECREMENT}),
        onAddCounter: () => dispatch({type: action.ADD,val: 10}),
        onSubtractCounter: () => dispatch({type: action.SUB,val:15}),
        onStoreCounter: () => dispatch({type: action.Store_Result}),
        onDeleteCounter: (id) => dispatch({type: action.Delete_Result,resultElId: id})
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);