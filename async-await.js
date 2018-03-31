async function myFun() {
    let isAuth = await checkUser();
    let user = null;
    if(isAuth) {
     user = await fetchUser();
    }
    console.log("User name: " + user.name + "<br>")
};

const checkUser = () => {
    return new Promise((resolve, reject) => {
        resolve(true);
    })
};

const fetchUser = () => {
    return new Promise((resolve, reject) => {
      resolve({ name: 'Dan' })
    })
 };