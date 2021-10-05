// resolved promise method which resolves the promise
// a promise can be resolved by using resolve method of promise
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}

// rejected promise method which rejects the promise
// a promise can be rejected by using reject method of promise
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'rejected promise!'});
        }, 500);
    });
}

// Calling both promises separately and handling the 
// resolved and reject results and then output to the console
// then is to get resolved promise
resolvedPromise().then(res => console.log(res))
// catch is to get rejected promise
rejectedPromise().catch(err => console.log(err))