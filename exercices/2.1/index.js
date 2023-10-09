const DEFAULT_MESSAGE = 
    'this is the best moment to have a look at this website !';
const fullMessage = addDateTime(DEFAULT_MESSAGE);
alert(fullMessage);

function addDateTime(message) {
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const hou = dateTimeNow.toLocaleTimeString([], {timeStyle: 'short'});
    return date + ' ' + hour + ' : ' + message;
}
