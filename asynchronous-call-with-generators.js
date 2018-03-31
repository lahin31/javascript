// Asynchronous call with generators(get request)
 
function* get_gen() {
	 yield axios.get("https://jsonplaceholder.typicode.com/users");
	 yield axios.get("https://jsonplaceholder.typicode.com/posts");
};

let myGen = get_gen();
console.log(myGen.next().value.then(resp => console.log(resp))); // this myGen.value() iterator will trigger the first item from the get_gen() generator
console.log(myGen.next().value.then(resp => console.log(resp))); // this myGen.value() iterator will trigger the second item from the get_gen() generator
