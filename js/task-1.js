const delay = ms => {
return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const loggers = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(loggers);
delay(1000).then(loggers);
delay(1500).then(loggers);