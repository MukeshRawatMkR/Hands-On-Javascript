//IQ: internal mechanisms code.
class MyPromise {
    constructor(executor) {
        this.onFulfilled = [];
        this.onRejected = [];
        this.state = 'pending';
        this.value = undefined;

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilled.forEach((fn) => fn(value));
            }
        };

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                this.onRejected.forEach((fn) => fn(reason));
            }
        };

        executor(resolve, reject);
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        } else if (this.state === 'rejected') {
            onRejected(this.value);
        } else {
            this.onFulfilled.push(onFulfilled);
            this.onRejected.push(onRejected);
        }
    }
}



//next file: wrapper around these internal mechanisms.