let visible = false;

const changeVisibility = () => {
    visible = !visible;
    renderTemplate();
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeVisibility}>{visible ? "Hide details" : "Show details"}</button>
            <p>{visible && "Hey. These are some details you can now see!"}</p>
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}

renderTemplate();