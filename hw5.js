let userName = prompt('Who are you?');
if(userName == 'Admin'){
    let password = prompt('Password');
    if(password == 'Im boss'){
        console.log('Welcome');
    } else if(password == null || password ==''){
        console.log('Canceled');
    } else {
        console.log('Wrong password');
    };
} else if(userName == null || userName ==''){
    console.log('Canceled');
} else {
    console.log('I dont know you');
};

