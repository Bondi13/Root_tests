# NordPass project

Recruitment tasks for NordPass

## Getting Started

`node_modules` folder has been removed to save up some space. 
Before start run `npm i -init` (or suitable) command to download required libraries.
Adjust fixtures data.json or environmental variables if needed
It is advised to use .only in APItest.js file to run single tests as line 147 test may cause to exceed request rate limit.
    Normally this test should be separated. 

## Usage

`npm run test` - runs all tests in background (test.js, test.feature and APItest.js files)
`npm run testHeaded` - runs all tests in dashboard
`npm run testChrome` - runs all tests in dashboard Chrome

## Automated tasks

1st challenge - UI Automation
    file: test.js
    Similar tests in BDD (Cucumber) approach are in test.feature file

2nd challenge - API
    a - Test Case which would cover the full flow of receiving information of the user’s second item.
        APItest.js, line: 18
    b - Test Cases you would run for validating the returned JSON object and data with GET /user/{id}/item endpoint.
        APItest.js, line: 45

    In order to verify if the correct user logged in, decode jwt value from login response and assert `user_uuid` value.
        APItest.js, line: 138

    After an item is created (POST /user/item), GET /user/items endpoint returns a new item only after approximately 10 seconds. 
    How would you tackle this in api tests? Provide solution.
        APItest.js, line: 115 (add item test will fail, obviously)

    Login response headers contain `x-rate-limit`, which forbids using login after X attempts per hour. 
    Provide an example of how you would verify in a test if a user can login after the limit is reached.
        APItest.js, line: 147 (this test should be isolated, also rate limit is quickly reset)

Additional API Task
        APItest.js line: 173 (test will fail, cause API is not prepared for those headers)
    
## Other, not-automated tasks

In `other tasks.pdf` file