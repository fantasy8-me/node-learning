const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 ex");
        resolve("p1r1");
    }, 2000);
})
p1.then(()=>{}, ()=>{console.error("catched")}).catch((err)=>{
    console.error(err);
})