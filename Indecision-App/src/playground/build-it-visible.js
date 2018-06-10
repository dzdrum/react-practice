class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility () {
        this.setState ((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
            <p>{this.state.visibility && "Hey. These are some details you can now see!"}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));