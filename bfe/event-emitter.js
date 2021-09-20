/**
 * You are asked to create an Event Emitter Class

const emitter = new Emitter()
It should support event subscribing

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)
emit(eventName, ...args) is used to trigger the callbacks, with args relayed

emitter.emit('event1', 1, 2);
// callback1 will be called twice
Subscription returned by subscribe() has a release() method that could be used to unsubscribe

sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore
 */

class EventEmitter {

    subscriptions = {};

    subscribe(eventName, callback) {
        if (!(eventName in this.subscriptions)) {
            this.subscriptions[eventName] = [];
        }

        const callbacks = this.subscriptions[eventName];
        callbacks.push(callback);

        return {
            release: () => {
                if (!(eventName in this.subscriptions)) {
                    return;
                }
                const callbacks = this.subscritions[eventName];
                const index = callbacks.indexOf(callback);
                if (index < 0) return;

                callbacks.splice(index, 1);

                if (callbacks.length === 0)
                    delete this.subscriptions[eventName];
            }
        }

    }

    emit(eventName, ...args) {
        if (!(eventName in this.subscriptions)) {
            return;
        }
        for (const callback of this.subscriptions[eventName]) {
            callback(...args);
        }
    }
}