# closest-aws-bucket

Closest AWS Bucket Region Cloudfront Function

This function is used to find the closest AWS bucket region to the user. It is used in conjunction with Cloudfront to serve the content from the closest region to the user.

Usage (to use all regions):

```js
closestS3Region(37.7749, -122.4194))
```

To provide regions available:

```js
closestS3Region(37.7749, -122.4194, ['ap-southeast-2', 'us-west-1]);
```
