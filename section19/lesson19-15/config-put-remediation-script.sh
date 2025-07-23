aws configservice put-remediation-configurations \
  --remediation-configurations '[
    {
      "ConfigRuleName": "s3-bucket-versioning-enabled",
      "TargetType": "SSM_DOCUMENT",
      "TargetId": "EnableS3BucketVersioning",
      "Parameters": {
        "BucketName": {
          "ResourceValue": {
            "Value": "RESOURCE_ID"
          }
        },
        "AutomationAssumeRole": {
          "StaticValue": {
            "Values": ["arn:aws:iam::YOUR_ACCOUNT_ID:role/SSMEnableS3VersioningRole"]
          }
        }
      },
      "Automatic": true,
      "MaximumAutomaticAttempts": 1,
      "RetryAttemptSeconds": 60
    }
  ]' \
  --region us-east-1
