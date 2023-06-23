## basic requirements and features.

   - Users register by giving a handle, which is unique to every user (a dummy name). Only the handle will be revealed to other users. So people are free to choose any handle and hence they stay anonymous.
   - A member can see other members who are online. They have an option to go public, which broadcast the message to all online members in the chat.
   - For private messages, the sender should first send a request to the other member. Other members upon accepting the request can have private chat with them.

## Technology, Tools used

   - MEAN Stack(Mongo, Express, Angular, Node).
    - Sockets to enable one-on-one communication in real time
   - AJAX for sign-up and login

   ## Pre-requisite : 
   You need to know some basic knowledge of MEAN Stack, as we are making use of it to build one.

   The MEAN stack is a JavaScript-based framework for developing web applications. MEAN is named after MongoDB, Express, Angular, and Node, the four key technologies that make up the layers of the stack.

    MongoDB — document database
    Express(.js) — Node.js web framework
    Angular(.js) — a client-side JavaScript framework
    Node(.js) — the premier JavaScript web server

    MERN (replacing Angular.js with React.js) 
    MEVN (using Vue.js).

    
## Web             Angular.js front end
At the very top of the MEAN stack is Angular.js, the self-styled “JavaScript MVW Framework” (MVW stands for “Model View and Whatever”).
Angular.js allows you to extend your HTML tags with metadata in order to create dynamic, interactive web experiences much more powerfully than, say, building them yourself with static HTML and JavaScript (or jQuery).
Angular has all of the bells and whistles you’d expect from a front-end JavaScript framework, including form validation, localization, and communication with your back-end service. 
=================================
## server              Express.JS
The next level down is Express.js, running on a Node.js server. Express.js calls itself a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is.
Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses. By making XML HTTP requests (XHRs), GETs, or POSTs from your Angular.js front end, you can connect to Express.js functions that power your application.
Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.
##                 Node.JS
=================================
## Database         MongoDB
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as Angular, Express, and Node.
That’s where MongoDB comes in: JSON documents created in your Angular.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval.
Again, if you want to easily get the best of MongoDB, you’ll want to look at MongoDB Atlas. This will allow you built-in full database security and cross-cloud scalability with the click of a button

sudheeshshetty/Chat
Contribute to Chat development by creating an account on GitHub.github.com

Here’s a quick glance at my chat application:
1-PmXr40QmsMiaRVejb1iS--qs3BqE2zINJE
Login screen
qQFOHwAEgl7k4DqVqRKVMlR1yd9c8T9I-388
How it looks after login.

Please do look at it, and give it a star at the top right if you like it. There are many ways I could improve this application. If you have any suggestions, send them to me at sudheeshshetty@gmail.com.
https://github.com/sudheeshshetty/Chat
You can follow me here on click the green heart if you found this helpful so that more people will see this. You can also follow me on GitHub and twitter.
