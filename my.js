let name=prompt('who is these?');
if (name == 'Admin'){
    alert('password');
    let pass=prompt('password');
    if (pass=='TheMaster'){
        alert('Welcom!');
    }else if (pass=='null'){
        alert('Canceled');
    }else alert('Wrong password');

}else if (name=='null'){
    alert('Canceld');

}else alert('I do not know you!');


