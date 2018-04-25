# CRA_SSR ENGINE
this Engine workes with [cra_ssr](https://github.com/AElouai/cra_ssr) so you will not worry about setting your Server and Client each time you want to add a feature or a new endpoint 


Engine role is to supply [cra_ssr](https://github.com/AElouai/cra_ssr) with REST endpoint and manage SSR


## Installation

```sh
$ npm install --save cra_ssr_engin
```

## Usage
you have to fork this repo and change it's name from `cra_ssr_engin` to `@yourProjectName/engine` and add your config 

configer `/api` by adding your andpoint URL and any header required by your server
**Ex :** 

```js
axios.defaults.baseURL = "http://localhost:3003/api";
```

You need to create all your endpoint in `/routes`  
**Ex :** 
```js
export const getSomeData = () => {
  return Api(`books`).then(response => response.data, error => null);
};
```
List your router action in  `/routes/switch`  


### Future work

Create a CLI to manage all those staff 

