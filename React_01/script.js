import detail from "./app.js"
import {add,sub} from "./math.js"

const user = {
  name: "Kannu",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

const {
  address: { city }
} = user;

console.log(city);
console.log(detail.name , detail.skills);
console.log(add(7,8))
console.log(sub(8,6))