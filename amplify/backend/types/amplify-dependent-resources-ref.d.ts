export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "StaffGroupRole": "string",
            "AdminGroupRole": "string"
        },
        "TIPSDashboardAuth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "TIPSDashboardAuthPreSignup": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        },
        "TIPSDashboardApiKeyGenerator": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "TIPSDashboardApiKeyAuthorizer": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "TIPSDashboardAuthApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "TIPSDashboardStorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}