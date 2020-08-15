# Lineysha_test
Repo for Lineysha company test submission.

This project was build using Nodejs, Express.js and MongoDB, ejs and sass.

In this project we do kyc of user in which user is register with surname start with "A". And do booking for two users.


# Functionality

`User Kyc`

* On clicking User kyc user registration page is open.
* Then register the user with all the details.

`User Booking`

* On clicking user booking booking page is open.
* Then fill all the needed details it will take users only they are registered already.
* And will not take both the users as foreigner.
* And it will take max. time differnece 1h

`Show all bookings`

*At the left upper side button show all booking show all the c booking

`Home`

* It will take to home page.
* And show all the registered users.
* And user detail link show the detail of specific user.


## Getting Started
1. Clone the project.
2. Go to folder.
3. Run following command.
    ``` 
    npm install
    ```
4. Run command: `npm start`.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Testing the code`

I use Mocha and Chai, Chai-http for testing the code.

I made five test cases for all the routes.

All test cases are passed.

Before testing change the id of the user from your database

For test the code Run command: `npm test` .

It will run all five test cases
