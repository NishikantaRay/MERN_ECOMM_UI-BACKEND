import Counter from "../models/counter.model";
let prifixs={
    bankTransactionId:"BNT",
    accountId:"BT",
    ramalingamBookingId:"RP",
    ramalingamBookingRequestId:"RPR",
    ramalingamEventId:"RP",

}
export const handleCounter=async(counterFor)=>{
    if(prifixs[counterFor]){
        let counter= await Counter.findOneAndUpdate({counterFor:counterFor},{$inc:{count:1}},{returnDocument:"after"})
        if(counter!=null && counter.count>99){
            return `${counter.prefix}${counter.count}`
        }else{
            const newCounter= new Counter({
                prefix:prifixs[counterFor],
                counterFor:counterFor
            })
            await newCounter.save()
            return `${newCounter.prefix}${newCounter.count}`
        }

    }else{
        return false
    }

}
const samp=async()=>{
let counter = await handleCounter("ramalingamBookingRequestId")
console.log(counter) 
}

// samp()