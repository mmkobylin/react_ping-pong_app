const { render } = require("react-dom")
const { default: initial } = require("./initial")
const { default: store } = require("./store")
const { default: reducer } = require("./reducer")

getting rid of the render; 

add react redux for the library

npm install react-redux
x 

will let our components and dispatchs; 

we dont want to be rerendeing 


add provider 
Provider is a class and therefore the component
<Provider store={ store }

components directory
value 

copy whole of the app in there

duplicate file and rename it. 

provider - wormhole via store, 

in indexjs 

impoer { connect }

API 
local storage 

get rid of persist state in store;

where put API request? 
you cant put asynchronous code in the reducer, 
it does not give back the state. 

no dispatch; API request, 
you loose reusability of API request

redux plugging
redux thunk //installed 

import thunk from "redux-thunk"

make in data ( makde data folder )
make actions, 
then put actions, and rename state; 

api. 

import axios from axios

const getCounter = () => {
    return () => { //inside we can do whatever we like
        axios.get("/conters").then(({ data }) => {
            console.log(data.data)
        }
    }
}














