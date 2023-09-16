let fb = fm = fp = 0;

document.getElementById('be').addEventListener('click',()=>{

    console.log('be is cliciked');
    let belist = document.getElementsByClassName('col');
    console.log('belist = ' + belist);

    for (let i = 0; i < belist.length; i++) {

    console.log('class name = ' + belist[i].className);


        if(belist[i].className.search('be') != -1)
        {
            console.log('this is skipped = ' + belist[i]);
            
            continue;
        }

        belist[i].style.display = 'none';
    }
    
// for (let i = 0; i < nlist.length; i++) {
//     nlist[i].style.display = 'block';
// }

    console.log('this is working');
});

document.getElementById('me').addEventListener('click',()=>{

    console.log('be is cliciked');
    let belist = document.getElementsByClassName('col');
    console.log('belist = ' + belist);

    for (let i = 0; i < belist.length; i++) {

    console.log('class name = ' + belist[i].className);


        if(belist[i].className.search('me') != -1)
        {
            console.log('this is skipped = ' + belist[i]);
            
            continue;
        }

        belist[i].style.display = 'none';
    }
    
// for (let i = 0; i < nlist.length; i++) {
//     nlist[i].style.display = 'block';
// }

    console.log('this is working');
});


document.getElementById('phd').addEventListener('click',()=>{

    console.log('be is cliciked');
    let belist = document.getElementsByClassName('col');
    console.log('belist = ' + belist);

    for (let i = 0; i < belist.length; i++) {

    console.log('class name = ' + belist[i].className);


        if(belist[i].className.search('phd') != -1)
        {
            console.log('this is skipped = ' + belist[i]);
            
            continue;
        }

        belist[i].style.display = 'none';
    }
    
// for (let i = 0; i < nlist.length; i++) {
//     nlist[i].style.display = 'block';
// }

    console.log('this is working');
});
