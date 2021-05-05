import validate from 'validate.js';

export const isValidEmail = email => {
    let constraints = {
        from: {
            email: true
        }
    };

    return validate({from: email}, constraints) === undefined;
}