const setTimeoutPromise = new Promise((resolve, reject) =>{

    setTimeout(() =>{
        resolve( );
    },1000);
//resolve는 then과 연결되어 있음
    setTimeoutPromise.then(()=>{
        console.log('1000ms 후 실행됩니다');
    })
})
