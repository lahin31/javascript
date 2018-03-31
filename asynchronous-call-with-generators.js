// Get Request

function* get_gen() {
	 yield axios.get("https://jsonplaceholder.typicode.com/users");
	 yield axios.get("https://jsonplaceholder.typicode.com/posts");
};

let myGen = get_gen();
console.log(myGen.next().value.then(resp => console.log(resp)));
console.log(myGen.next().value.then(resp => console.log(resp)));