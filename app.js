var amqp = require('amqplib-easy')('amqp://guest:guest@localhost:5672');

amqp.consume(
    {
        // exchange: 'amq.direct',
        queue: 'test-queue',
        topics: [ '.*' ]
    },
    function (msg) {
        console.log('msg: ', msg);
    }
);
