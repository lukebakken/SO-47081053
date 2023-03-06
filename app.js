const amqp = require('amqplib-easy')('amqp://guest:guest@localhost:5672');
var count = 0;

amqp.consume(
    {
        exchange: 'test-exchange',
        queue: 'test-queue',
        topics: [ '.*' ],
        parse: function (msg) { JSON.stringify(msg) }
    },
    function (msg) {
        count += 1;
        if (count % 1024 === 0) {
            console.log('msg count: ', count);
        }
    }
    // NOTE: adding this will increase consume performance, but be sure
    // to understand the implications
    //, { noAck: true}
);
