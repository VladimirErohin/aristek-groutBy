let data = [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" }
]

function groupBy(...args){
    try{
        let objPr = {};

        if(!Array.isArray(args[0])) {
            throw new Error('The arr is not provided!!!');
        }else if(typeof args[1] !== "string"){
            throw new Error('The key is not provided!!!');
        }else if(!args[0].some(el=>el[args[1]])){
            return objPr
        }

        let nArr=args[0];
        let key=args[1];
        let propArr =  [...new Set( nArr.map(el=>el[key]))];

        for(let  i =0; i<propArr.length; i++){
            let prevEl = propArr[i];

            if(prevEl !== propArr[i]){
                objPr[propArr[i]] = nArr.filter(el=> el[key]===propArr[i]);
            }else{
                objPr[propArr[i]] = nArr.filter(el=> el[key]===propArr[i]);
            }
        }
        return objPr
    }catch(err){
        alert(err.message)
    }
}