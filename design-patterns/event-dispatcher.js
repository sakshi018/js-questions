class EventDispatcher {
    constructor() {
        this.listeners = {};
    }

    addEventListener(type, listener) {
        if (!this.listeners[type])
            this.listeners[type] = [];
        if (this.listeners[type].indexOf(listener) === -1) {
            this.listeners[type].push(listener);
        }
    }

    removeEventListener(type, listener) {
        if (!this.listeners || !this.listeners[type])
            return;
        const index = this.listeners[type].indexOf(listener);
        if (index !== -1) {
            this.listeners[type].splice(index, 1);
        }
    }

    dispatchEvent(event) {
        if (!this.listeners || !this.listeners[event.type])
            return;
        const copyListeners = this.listeners[event.type].slice(0);

        for (let i = 0; i < copyListeners.length; i++) {
            copyListeners[i].call(event.target, event);
        }
    }
}

const ed = new EventDispatcher();
const event = {
    target: null,
    type: 'my-event'
};
const listener = () => {
    console.log('handled!');
};
ed.addEventListener('my-event', listener);
// should be handled
ed.dispatchEvent(event);
ed.removeEventListener('my-event', listener);
// should not be handled
ed.dispatchEvent(event);
