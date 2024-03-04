# cicd-deploy-S3-bucket-and-cloudformation

Deploy an application in AWS that uses and S3 bucket and cloud formation.

## Pre-requisites

Create an [AWS Access credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html).

## Inputs

> INFO: Always replace the following parameters:

### `ENVIRONMENT` (**required**)

Name of the environment to deploy.

```yaml
with:
    ENVIRONMENT: testing
```

### `AWS_CF_STACK_NAME` (**required**)

AWS cloud-formation stack name.

```yaml
with:
    AWS_CF_STACK_NAME: ${{ github.event.repository.name }}
```

> INFO: Recommend send the repository name.

### `PROJECT_NAME` (**required**)

AWS Project name.

```yaml
with:
    PROJECT_NAME: "test-project-name"
```

### `AWS_ACCESS_KEY_ID` (**required**)

AWS Access Key ID.

```yaml
with:
    AWS_ACCESS_KEY_ID: AKIA*****BUT
```

### `AWS_SECRET_ACCESS_KEY` (**required**)

AWS Secret Access Key.

```yaml
with:
    AWS_SECRET_ACCESS_KEY: yWFX**********aC2sCc
```

### `AWS_REGION` (**required**)

AWS Region.

```yaml
with:
    AWS_REGION: us-east-2
```

### `DOMAIN` (**required**)

Domain name.

```yaml
with:
    DOMAIN: steplix-web
```

### `SUB_DOMAIN` (**required**)

Subdomain name.

```yaml
with:
    SUB_DOMAIN: test
```

### `ACM_CERTIFICATE_ARN` (**required**)

AWS Certificate ARN.

```yaml
with:
    ACM_CERTIFICATE_ARN: arn:aws:acm:us-east-2:457821500943:certificate/0f4e5312-k9f0-5ty6-a2f4-9i4a3e0e73b3
```

### `CACHE_POLICY` (**not required**)

Cache policy.

`Default value`: CachingOptimized

```yaml
with:
    CACHE_POLICY: CachingOptimized
```

### `CONCAT_ENV_CF_STACK_NAME` (**not required**)

Concatenate the environment in the cloudformation stack name at the end.

`Default value`: true

```yaml
with:
    CONCAT_ENV_CF_STACK_NAME: true
```

## Example Usage

```yaml
name: SomeWorkflow

on: [push]

jobs:
    build:
        name: Build
        runs-on: ubuntu-latest
        steps:
            - id: string
              uses: steplix/cicd-steplix-deploy-s3-bucket-and-cloudformation@v1
              with:
                  ENVIRONMENT: testing
                  COMMIT_MESSAGE: ${{ github.event.head_commit.message }}
                  PROJECT_NAME: ${{ github.event.repository.name }}
                  AWS_ACCESS_KEY_ID: AKIA*****BUT
                  AWS_SECRET_ACCESS_KEY: yWFX**********aC2sCc
                  AWS_REGION: us-east-2
                  DOMAIN: steplix-web
                  SUB_DOMAIN: test
                  ACM_CERTIFICATE_ARN: arn:aws:acm:us-east-2:457821500943:certificate/0f4e5312-k9f0-5ty6-a2f4-9i4a3e0e73b3
```
