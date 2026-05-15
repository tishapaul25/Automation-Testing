# API Automation Testing Project

## Tools Used
- Postman
- Newman
- JavaScript

## API Base URL
https://reqres.in/api

## Test Scenarios
- Login API
- GET User
- PUT Update Profile
- PATCH Single Field
- Negative Testing

## Features
- Response validation
- Status code validation
- JSON response verification
- Automation scripts
- Negative testing

## Run Collection Using Newman

```bash
newman run API_Testing_Q4-Q8.postman_collection.json
```

## Generate HTML Report

```bash
newman run API_Testing_Q4-Q8.postman_collection.json -r html
```