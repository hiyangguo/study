

function Size(options) {
  var emitter = $();
  this.on = () => emitter.on.apply(emitter,arguments);
  this.off = () => emitter.off.apply(emitter,arguments);


  ["callbackSubmit","callbackClean"].forEach((eventName) => {
    if (options[eventName])
      this.on(eventName,options[eventName])
  });
}

