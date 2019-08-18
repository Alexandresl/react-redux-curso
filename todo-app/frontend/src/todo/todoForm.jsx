import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, clear, add } from './todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {

        const { add, clear, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {

        const { add, search, description } = this.props

        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input
                        onKeyUp={this.keyHandler}
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        id="description"
                        onChange={this.props.changeDescription}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus"
                        onClick={() => add(description)} />
                    <IconButton style='info' icon='search'
                        onClick={() => search()} />
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, add, clear }, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)