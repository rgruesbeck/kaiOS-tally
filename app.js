class App {
    constructor(root, config) {
        this.root = root;
        this.config = config;

        this.state = {
            count: 0
        };

        console.log(this)

        this.addClickHandler();
        this.addKeyHandler();
        this.render();
    }

    addClickHandler() {
        document.addEventListener('click', (event) => {
            this.increment();
        }, false);
    }

    addKeyHandler() {
        document.addEventListener('keydown', (event) => {
            if (event.code === this.config.settings.incrementKey) {
                this.increment();
            }

            if (event.code === this.config.settings.decrementKey) {
                this.decrement();
            }

            if (event.code === this.config.settings.resetKey) {
                this.reset();
            }

        }, false);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: Math.max(this.state.count - 1, 0)
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    setState(state) {
        // create updates
        let updates = {
            ...this.state,
            ...state
        }

        // reject non-changes
        if (JSON.stringify(updates) === JSON.stringify(this.state)) { return; }

        // update state and re-render
        this.state = updates;
        this.render();
    }

    render() {
        this.root.innerHTML = `
        <div id="increment" class="container">
            <div class="count">${this.state.count.toLocaleString(this.config.settings.locale)}</div>
            <div class="instructions">${this.state.count === 0 ? this.config.settings.instructions : ''}</div>
        </div>
        `
    }
}

module.exports.default = App;