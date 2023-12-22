const BankInfo = ({settings}) => {
    return ( 
        <div className="bank-info">
            <div className="bank-name">{settings.bank.name}</div>
            <div className="bank-iban">{settings.bank.iban}</div>
            <div className="bank-bic">{settings.bank.bic}</div>
        </div>
     )
    ;
}

export default BankInfo;