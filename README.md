# caps

[UML](Lab13UML.jpg)

# App Description

In this phase, we are going to implement a system to guarantee that notification payloads are read by their intended subscriber. Rather than just triggering an event notification and hope that client applications respond, we're going to implement a "Queue" system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

In this final phase, we'll be implementing a "Queue" feature on the Server, allowing Driver and Vendor clients to subscribe to messages added to pickup and delivered queues.