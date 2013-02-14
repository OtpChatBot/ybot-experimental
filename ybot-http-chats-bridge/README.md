ybot-http-chats-bridge
========================

Here is simple example of building bridge between http and different chat system like xmpp, irc and etc... built on top of [Ybot](https://github.com/0xAX/Ybot) chat robot. In this example you can see input form and button. Run Ybot on your server and push data from html page to Ybot, and it resend it in other connected chats.

At that moment supports sending data from http to:

  * IRC (+ssl supporting, +private messages supporting).
  * XMPP MUC (+single user chat supporting, +private messages supporting, +ssl supporting).
  * Campfire.
  * Gtalk.
  * HipChat.
  * Flowdock.
  * Skype.
  
When you push button at html page this json sends to Ybot via http post request:

```javascript
{
	"type" : "broadcast", 
	"content" : "Hi all"
}
```

After Ybot gets this json, it resend it to connected chats.
