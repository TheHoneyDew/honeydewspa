import { RemovalPolicy, Stack, StackProps, aws_s3, CfnOutput } from 'aws-cdk-lib';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';


export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    //create an s3 bucket
    const honeydewSiteBucket = new aws_s3.Bucket(this, "honeydewSiteBucket", {
      publicReadAccess:true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      autoDeleteObjects: true
    });

    // deploy code to the bucket.

    const sourceCode = new BucketDeployment(
      this,
      "honeydewSiteDeployment",
      {
        sources: [Source.asset("../build")],
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
