

export const checkPgPayment = async (data) =>{

    if(data.paymentStatus === "SUCCESS"){
        return {status:"SUCCESS",settlementStatus:"pending",amount:data.bankTransaction.amount,netAmount:data.bankTransaction.amount*(1-0.2),bankTransactionId:data.bankTransactionId,bankTransaction:data.bankTransaction,transactionType:"CREDIT",paymentGateway:"HDFC",paymentMode:"ONLINE",pgCharges:2 }
    }else{
        return {status:"FAILED",settlementStatus:"pending",amount:0,netAmount:0,bankTransactionId:data.bankTransactionId,bankTransaction:data.bankTransaction,transactionType:"CREDIT",paymentGateway:"HDFC",paymentMode:"ONLINE",pgCharges:2 }
    }
}
