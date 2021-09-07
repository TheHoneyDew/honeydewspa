import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deploy from '@aws-cdk/aws-s3-deployment';
import { CfnOutput } from '@aws-cdk/core';

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //create an s3 bucket
    const honeydewSiteBucket = new s3.Bucket(this, "honeydewSiteBucket", {
      publicReadAccess:true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      autoDeleteObjects: true
    });

    // deploy code to the bucket.

    const sourceCode = new s3Deploy.BucketDeployment(
      this,
      "honeydewSiteDeployment",
      {
        sources: [s3Deploy.Source.asset("../build")],
        destinationBucket: honeydewSiteBucket
      }
    );

    //possibly add a CloudFormation Web Distribution.


    // log the url link to the site
    console.log(`${honeydewSiteBucket.virtualHostedUrlForObject('index.html', { regional: false })}`);
    const output = new CfnOutput(this, "SiteURL", {
      value: `${honeydewSiteBucket.virtualHostedUrlForObject('index.html', { regional: false })}`
    });

  }
}
