class Mediator {
    static subscribers = {};

    static subscribe(event, callback) {
        const {subscribers}= this;
        
        subscribers[event] = subscribers[event] || [];
        subscribers[event].push(callback);
    }

    static unsubscribe(event, callback) {
        let subscriberIndex;
        const {subscribers}= this;


        if(!event) {
            subscribers = {}
        } else if(event && !callback) {
            subscribers[event] = [];
        } else {
            subscriberIndex = subscribers[event].indexOf(callback);
            if(subscriberIndex > -1) {
                subscribers[event].splice(subscriberIndex, 1);
            }
        }
    }

    static publish(event, data) {
        const {subscribers}= this;

        if(subscribers[event]) {
            subscribers[event].forEach(callback => callback(data));
        }
    }
}
