const getmonth = (callback) => {
    setTimeout (()=> {
        let error = false
        let month = ['January','February','March','April','May','Juni','Jully','August','September','October','November','Desember']


        
        function callback(){
            let result = month.map((item)=>{
                return (item)
            })

            if(month != null){
                console.log(result);
            }else{'empty data!'}
        
        }


        if(!error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

getmonth()


