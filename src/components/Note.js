import React from "react"

class Note extends React.Component {
    constructor() {
        super()
        this.state = {
            noteContent: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="Note">
                <form>
                    <textarea className="noteContent" name="noteContent" value={this.state.noteContent} onChange={this.handleChange}>Hi</textarea>
                    <h1>{this.state.noteContent}</h1>
                </form>
            </div>
        )
    }
}

export default Note