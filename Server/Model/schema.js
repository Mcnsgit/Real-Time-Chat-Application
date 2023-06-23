// {
//  “_id” : ObjectId(“5809171b71e640556be904ef”),
//  “name” : “Sudheesh Shetty”,
//  “handle” : “sudheesh”,
//  “password” : “556624370”,
//  “phone” : “8888888888”,
//  “email” : “sudheeshshetty @gmail.com”,
//  “friends” : [
//         {
//       “name” : “abc”,
//       “status” : “Friend”
//     },
// {
//       “name” : “xyz”,
//       “status” : “Friend”
// }
//  ],
//  “__v” : 0
// }

/* Here, the status of each member can be:

    Friend: Stating that the member is a friend.
    Pending: If the member has not yet accepted.
    Blocked: If the member has blocked the other member.

Suppose the member has rejected a chat request. The sender can then send a chat request again. A user can also save the messages by creating an extra collection. Each document will have the message, sender, receiver, and time.

So design your database according to your specific needs and how you want to handle messages.*/