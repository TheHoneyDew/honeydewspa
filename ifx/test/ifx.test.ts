

import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {AppStack} from '../lib/app-stack';

test('Empty Stack', () => {
    const app = new App();
    // WHEN
    const stack = new AppStack(app, 'MyTestStack');

    //THEN
    const template = Template.fromStack(stack);

    template.templateMatches({
        "Resources": {}
      });
});
