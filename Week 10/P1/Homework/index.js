const usernameField = document.querySelector('#username');
const verifyUsername = () => {
    let username = usernameField.value;
    if(username.length < 4) {
        alert('Username must be at least 4 characters');
    }
    for(let i = 0; i < username.length; ++i) {
        if(username.charCodeAt(i) < 48) {
            alert('Invalid username character');
            break;
        } else if((username.charCodeAt(i) > 57) && (username.charCodeAt(i) < 65)) {
            alert('Invalid username character');
            break;
        } else if((username.charCodeAt(i) > 90) && (username.charCodeAt(i) < 97)) {
            alert('Invalid username character');
            break;
        } else if(username.charCodeAt(i) > 122) {
            alert('Invalid username character');
            break;
        } else {
            continue;
        }
    }
}
usernameField.addEventListener('change', verifyUsername);

const phoneNumberField = document.querySelector('#phone');
const verifyPhoneNumber = () => {
    let phoneNumber = phoneNumberField.value;

    if(phoneNumber.length < 10) {
        alert('Invalid phone number length. Must be at least 10 characters!');
    }

    for(let i = 0; i < phoneNumber.length; ++i) {
        if((phoneNumber.charCodeAt(i) < 48) || (phoneNumber.charCodeAt(i) > 57)) {
            alert('Invalid phone number characters. Must be only numbers!');
            break;
        }
    }
}
phoneNumberField.addEventListener('change', verifyPhoneNumber);