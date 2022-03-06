# TASK 1

---

### Description and Question :-

I have used browser debugger tool identify the main problem which is component not rendering. I found three issues :

### Answer :-

1. To render the component when user send a message, create new variable (copy of old) and make changes in that variable before setting the state value.
2. Use async await on "postMessage" function because "saveMessage" returns a promis.
3. To display correct order of message sort the messages by ids.

# TASK 2

---

### Description and Question :-

We want to track for each message if it has been read by the recipient, and to make several front end UI updates with this information, such as displaying how many unread messages there are in a given conversation.

You can reference the spec in this Figma file for the various updates to be made to reflect unread messages. (Note that the Figma file includes more than just the spec needed for this feature). Please include a screenshot in your description showing your updated UI.

In your description, please explain a couple different ways we could have stored the read status in the database for this feature. What are the benefits and drawbacks of each?

### Answer :-

##### Updated Login UI

<img src="https://i.ibb.co/d6ZJkPD/Screenshot-2022-03-06-at-1-46-13-PM.png" alt="Screenshot-2022-03-06-at-1-46-13-PM" border="0">
![Login UI](screenshots/login.png)

##### Updated Register UI

<img src="https://i.ibb.co/47ctnbr/Screenshot-2022-03-06-at-1-46-22-PM.png" alt="Screenshot-2022-03-06-at-1-46-22-PM" border="0">

##### Display Unread Message

<img src="https://i.ibb.co/FxtpYhk/Screenshot-2022-03-06-at-1-46-43-PM.png" alt="Screenshot-2022-03-06-at-1-46-43-PM" border="0">

##### Added Emoji and File Upload on Input field

<img src="https://i.ibb.co/dgwZhD4/Screenshot-2022-03-06-at-1-46-54-PM.png" alt="Screenshot-2022-03-06-at-1-46-54-PM" border="0">

##### Show Typing Indicator

<img src="https://i.ibb.co/MgwfCPj/Screenshot-2022-03-06-at-1-47-14-PM.png" alt="Screenshot-2022-03-06-at-1-47-14-PM" border="0">
