# SessionTogether


How to sign up for a user account

1. In Postman, go to http://localhost:3000/api/sign-up
2. Select 'post request'. 
3. The message body of the request should be in this format: 
{
         "username": "___",
      "email": "___",
      "password": "___"
  }
5.  Hit the send button
6.  You will receive a JSON webtoken 

How to see all the users 

1. In Postman, go to http://localhost:3000/api/users
2. Select 'get request'
3.  Hit the send button

How to sign-in 

1. In Postman, go to http://localhost:3000/api/sign-in
2.  Select 'post request'. 
3. The message body of the request should be in this format: 
{
         "username": "___",
      "password": "____"
  }
6. Hit the send button

How to verify 

1. In Postman, go to http://localhost:3000/api/verify 
2. Select post request
3. Select the Authorization tab
4. Click on the dropdown menu below 'type' and select bearer token 
5. Click on the input next to 'Token' and paste in a JSON webtoken. You could use the one you recieved while signing-up
6. Hit the send button
7. You will receive the user account associated with the JSON webtoken, or 'Not authorised' if there isn't any accounts associated with it. 

How to change password 

1. Find the id of the user whose password you want to change
2.  In Postman, go to http://localhost:3000/api/id
3. Select 'post request'. 
3. The message body of the request should be in this format: 
{
      "password": "____"
  }
4. Hit the send button

How to create a card
1. In Postman, go to http://localhost:3000/api/cards
2. Select post request
3. Repeat steps 3-5 from "how to verify"
4. The message body of the request should be in this format: 
 {
          "truth_or_bare": "___",
      "content": "____",
          "users": "___"
  }
6. Hit the send button

How to see cards

1. In Postman, go to http://localhost:3000/api/cards
2. Select get request
3. Hit the send button

How to update a card

1. Find the id of the post you want to change. 
2.  In Postman, go to http://localhost:3000/api/cards/id
3.  Select put request
4.  Repeat steps 3-5 from "how to verify"
5.  The message body of the request should be in this format: 
{
      "____": "____"
  }

7. Hit the send button

How to delete a card 
  
  1. Find the id of the post you want to change. 
2.  In Postman, go to http://localhost:3000/api/cards/id
3.  Select delete request
4.  Repeat steps 3-5 from "how to verify"
5.  Hit the send button


