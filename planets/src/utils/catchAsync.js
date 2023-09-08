module.exports = (fn)=>{
    return (req,res)=>{
        fn(req,res).catch(error=>next(error))
    }
}