import axios from 'axios';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';

console.log('Hey! This code is executed in the background, you will not see it in the browser console...');

// example of using Axios in the background script. You need to use the custom adapter.
axios
  .request({
    url: 'https://google.com',
    method: 'GET',
    adapter: fetchAdapter,
  })
  .then((data) => {
    console.log('DATA:', data);
  });
