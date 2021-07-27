class EventEmitter {
    listerners = {};

    addEventListener(eventName, fn) {
        this.listerners[eventName] = this.listerners[eventName] || [];
        this.listerners[eventName].push(fn);
        return this;
    }

    on(eventName, fn) {
        return this.addEventListener(eventName, fn);
    }

    removeEventListener(eventName, fn) {
        const list = this.listerners[eventName];
        if (!list) return this;

        for (let i = list.length; i > 0; i--) {
            if (lis[i] === fn) {
                list.splice(i, 1);
                break;
            }
        }
        return this;
    }

    off(eventName, fn) {
        return this.removeEventListener(eventName, fn);
    }

    once(eventName, fn) {
        this.listerners[eventName] = this.listerners[eventName] || [];

        const onceWrapper = () => {
            fn();
            this.off(eventName, onceWrapper);
        };
        this.listerners[eventName].push(onceWrapper);
        return this;
    }

    emit(eventName, ...args) {
        const funcs = this.listerners[eventName];
        if (!funcs) return false;

        funcs.forEach(f => {
            f(...args);
        });
        return true;
    }

    listenerCount(eventName) {
        const list = this.listerners[eventName] || [];
        return list.length;
    }

    rawListeners(eventName) {
        return this.listerners[eventName];
    }
}