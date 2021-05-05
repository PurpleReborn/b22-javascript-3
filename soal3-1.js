const cekHariKerja = (day) =>{
    return new Promise  ((resolve, reject)=>{
        setTimeout(() =>{
            
            const Text = [5, 12, 8, 130, 44]
            let cek = Text.findIndex((isLargeNumber)=>{
                return isLargeNumber > 11
            })

            if(cek){
                resolve(cek)
            }else{
                reject(new Error('array tidak ditemukan'))
            }

        },3000)
    })
}

cekHariKerja().then( resolved => {
    console.log(resolved)
    console.log('adalah array index ke')
}).catch(err => {
    console.log(err)
})

async function proccess() {
    try{
    const result = await cekHariKerja()
    console.log(result)
    console.log('diproses')
    }catch(e){
        console.log('gagal diproses')
    }finally{
        console.log('selesai diproses')
    }
}

proccess()
