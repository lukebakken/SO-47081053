# SO-47081053

StackOverflow #47081053 test code

## Running a Test

* Start RabbitMQ
* Run the Node.js app with `node ./app.js`. This should create `test-exchange` and `test-queue` (among others)
* Clone https://github.com/rabbitmq/rabbitmq-perf-test.git and build with `mvn compile`
* Run the perf test with this command:
    ```
    mvn -q exec:java -Dexec.mainClass=com.rabbitmq.perf.PerfTest -Dexec.args="--uri amqp://localhost:5672 --producers 1 --consumers 0 --predeclared --exchange test-exchange --queue test-queue --rate 1024"
    ```

You can tweak the publish rate (`--rate`) or remove it entirely and watch what happens. Also take a look at the `NOTE` in `app.js`.
