// ******************Arrow function********************

// this used in the current context of function

const user = {
    userName: "vivek",
    price: 333,
    wecomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
    }
}

user.welcomeMessage()