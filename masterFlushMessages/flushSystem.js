
function flushSystem() {
  return function (req, res, next) {
    // Check for sessions
    if(!req.session){
      throw new Error('flushSystem must have sessions enabled')
    }
    // add addMessage function to req object
    req.pushMessage = addMessage;
    // add setMessages function to req object
    req.setMessages = setMessages;
    // add res.locals to req object
    req.locals = res.locals;
    // INIT messages array
    if (!req.session.messages) {
      req.session.messages = [];
    }
    // INIT THE locals.message
    res.locals.messages = [];
    // call next middleware
    next();
  };
}

function addMessage(message) {
  // PUSH NEW MESSAGE
  this.session.messages.push(message);
}

function setMessages() {
  // ADD MESSAGES TO LOCALS
  this.locals.messages = this.session.messages;
  // CLEAR THE MESSAGES ARRAY
  this.session.messages = [];
}
// export middleware
module.exports = flushSystem;