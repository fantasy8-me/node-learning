const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // throw "p1 ex"
        resolve("p1r1");
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // throw "p2 ex"
        resolve("p2r2");
    }, 2000);
})


const mainf = async () => {
    try {
        const r1 = await p1;
        const r2 = await p2;
        console.log(r1, r2)
    } catch (e) {
        console.error(e);
    }

}

mainf();