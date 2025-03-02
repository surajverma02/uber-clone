# Backend API Documentation

## Routes

### /users/register
- **Description**: Register a new user.
- **HTTP Method**: POST
- **Required Body**:
    ```json
    {
        "fullname": {
            "firstname": "String",
            "lastname": "String",
        },
        "password": "String",
        "email": "String"
    }
    ```
- **Response Body**:
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MyZTQ3Y2NiZjcxZDNiY2FjZjk4YTMiLCJpYXQiOjE3NDA4MjU3MjQsImV4cCI6MTc0MDkxMjEyNH0.QfCYa2PXXdbe2ycVeNYWNrqYisfWkXNVGC8TvnfJWEA",
        "user": {
        "fullname": {
            "firstname": "Test"
        },
        "email": "test@gmail.com",
        "password": "$2b$10$NSuRoLhyPqLKxog27pklaemKKsDOCvsKb2FfJi0ZdaSLlIXlNvYYy",
        "_id": "67c2e47ccbf71d3bcacf98a3",
        "__v": 0
        }
    }
    ```

### /users/login
- **Description**: Login an existing user.
- **HTTP Method**: POST
- **Required Body**:
    ```json
    {
        "password": "String",
        "email": "String"
    }
    ```
- **Response Body**:
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MyZTQ3Y2NiZjcxZDNiY2FjZjk4YTMiLCJpYXQiOjE3NDA4MjU3MjQsImV4cCI6MTc0MDkxMjEyNH0.QfCYa2PXXdbe2ycVeNYWNrqYisfWkXNVGC8TvnfJWEA",
        "user": {
        "fullname": {
            "firstname": "Test"
        },
        "email": "test@gmail.com",
        "password": "$2b$10$NSuRoLhyPqLKxog27pklaemKKsDOCvsKb2FfJi0ZdaSLlIXlNvYYy",
        "_id": "67c2e47ccbf71d3bcacf98a3",
        "__v": 0
        }
    }
    ```

### /users/logout
- **Description**: Logout the current user.
- **HTTP Method**: GET
- **Required Body**: None
- **Response Body**:
    ```json
    {
        "message": "Logout successfully"
    }
    ```

### /users/profile
- **Description**: Get the profile of the current user.
- **HTTP Method**: GET
- **Required Body**: None
- **Response Body**:
    ```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MyZTQ3Y2NiZjcxZDNiY2FjZjk4YTMiLCJpYXQiOjE3NDA4MjU3MjQsImV4cCI6MTc0MDkxMjEyNH0.QfCYa2PXXdbe2ycVeNYWNrqYisfWkXNVGC8TvnfJWEA",
        "user": {
        "fullname": {
            "firstname": "Test"
        },
        "email": "test@gmail.com",
        "_id": "67c2e47ccbf71d3bcacf98a3",
        "__v": 0
        }
    }
    ```

### /captains/register
- **Description**: Register a new captain.
- **HTTP Method**: POST
- **Required Body**:
    ```json
    {
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "password": "String",
        "vehicle": {
            "color": "String",
            "plate": "String",
            "capacity": "Number",
            "vehicleType": "String"
        }
    }
    ```
- **Response Body**:
    ```json
    {
        "token": "String",
        "captain": {
            "fullname": {
                "firstname": "String",
                "lastname": "String"
            },
            "email": "String",
            "vehicle": {
                "color": "String",
                "plate": "String",
                "capacity": "Number",
                "vehicleType": "String"
            },
            "_id": "String",
            "__v": 0
        }
    }
    ```

### /captains/login
- **Description**: Login an existing captain.
- **HTTP Method**: POST
- **Required Body**:
    ```json
    {
        "email": "String",
        "password": "String"
    }
    ```
- **Response Body**:
    ```json
    {
        "token": "String",
        "captain": {
            "fullname": {
                "firstname": "String",
                "lastname": "String"
            },
            "email": "String",
            "vehicle": {
                "color": "String",
                "plate": "String",
                "capacity": "Number",
                "vehicleType": "String"
            },
            "_id": "String",
            "__v": 0
        }
    }
    ```

### /captains/logout
- **Description**: Logout the current captain.
- **HTTP Method**: GET
- **Required Body**: None
- **Response Body**:
    ```json
    {
        "message": "Logout successfully"
    }
    ```

### /captains/profile
- **Description**: Get the profile of the current captain.
- **HTTP Method**: GET
- **Required Body**: None
- **Response Body**:
    ```json
    {
        "fullname": {
            "firstname": "String",
            "lastname": "String"
        },
        "email": "String",
        "vehicle": {
            "color": "String",
            "plate": "String",
            "capacity": "Number",
            "vehicleType": "String"
        },
        "_id": "String",
        "__v": 0
    }
    ```
    