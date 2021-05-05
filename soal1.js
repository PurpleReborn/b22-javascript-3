const cekHariKerja = (day) =>{
    return new Promise  ((resolve, reject)=>{
        setTimeout(() =>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }

        },3000)
    })
}

cekHariKerja('senin').then( resolved => {
    console.log(resolved)
    console.log('adalah hari kerja')
}).catch(err => {
    console.log(err)
})

async function proccess() {
    try{
    const result = await cekHariKerja('senin')
    console.log(result)
    console.log('diproses')
    }catch(e){
        console.log('gagal diproses')
    }finally{
        console.log('selesai diproses')
    }
}

proccess()