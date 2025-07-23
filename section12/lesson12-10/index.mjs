// index.mjs
'use strict';

export const handler = async (event, context) => {
  console.log('LogEC2InstanceStateChange - ESM version');
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Finished with ESM!' }),
  };
};
