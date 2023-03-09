let cashfree = {
    //sort list
    methods: ['emi', 'upi', 'wallet', 'card', 'bnpl', 'netbanking'],
    international_card: true,
    recurring_payment: true,
    partial_payment: true,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 2.7,
    extra_fee: 0,

    //display
    name: 'CashFree',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '1.9% Indian Card, Wallet, NetBanking', 
        '3.5% International card', 
        '2.5% BNPL and EMI'
    ],
    duration: '2-4 days'
}

let razorpay = {
    //sort list
    methods: ['emi', 'upi', 'wallet', 'card', 'bnpl', 'netbanking', 'neft'],
    international_card: true,
    recurring_payment: true,
    partial_payment: true,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 2.35,
    extra_fee: 0,

    //display
    name: 'RazorPay',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '2% Indian Card, Wallet, NetBanking, UPI', 
        '3% International card', 
        '2% Platform fee'
    ],
    duration: '4-5 days'
}

let paytm = {
    //sort list
    methods: ['upi', 'wallet', 'card', 'netbanking'],
    international_card: true,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 1.65,
    extra_fee: 0,

    //display
    name: 'Paytm',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '1.4% Indian Card, Wallet, NetBanking', 
        '2.65% International card'
    ],
    duration: 'KYC completion'
}

let paypal = {
    //sort list
    methods: ['upi', 'wallet', 'card', 'netbanking'],
    international_card: true,
    recurring_payment: true,
    partial_payment: true,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 5,
    extra_fee: 3,

    //display
    name: 'PayPal',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '5% + 3INR per transaction'
    ],
    duration: 'within 30 days'
}

let payu = {
    //sort list
    methods: ['emi', 'upi', 'wallet', 'card', 'bnpl', 'netbanking'],
    international_card: true,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 2,
    extra_fee: 0,

    //display
    name: 'PayU',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '2% per transaction'
    ],
    duration: '1-2 days'
}

let billdesk = {
    //sort list
    methods: ['upi', 'wallet', 'card', 'netbanking'],
    international_card: false,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: false,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 0.9,
    extra_fee: 0,

    //display
    name: 'BillDesk',
    setup_fee: 'Free',
    annual_fee: 'INR 30,000',
    transactional_fee: [
        '0.9% of every transaction'
    ],
    duration: '1-2 days'
}

let ccavenue = {
    //sort list
    methods: ['upi', 'wallet', 'card', 'netbanking'],
    international_card: true,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 3.5,
    extra_fee: 0,

    //display
    name: 'CCAvenue',
    setup_fee: 'Free',
    annual_fee: 'INR 1200',
    transactional_fee: [
        '2% Indian Card, Wallet, NetBanking, UPI', 
        '4.99% International card',
    ],
    duration: '1-2 days'
}

let paykyun = {
    //sort list
    methods: ['upi', 'wallet', 'card', 'netbanking'],
    international_card: false,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 1.75,
    extra_fee: 0,

    //display
    name: 'Paykyun',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '1.75% of domestic transaction'
    ],
    duration: '1 hour'
}

let instamojo = {
    //sort list
    methods: ['emi', 'upi', 'wallet', 'card', 'bnpl', 'netbanking', 'neft'],
    international_card: true,
    recurring_payment: true,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 2.5,
    extra_fee: 3,

    //display
    name: 'Instamojo',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        '2% + INR 3 for Indian Card, Wallet, NetBanking, UPI, EMI, BNPL', 
        '3% International card',
    ],
    duration: '2-3 days'
}

let easebuzz = {
    //sort list
    methods: ['card', 'netbanking'],
    international_card: false,
    recurring_payment: false,
    partial_payment: false,
    advance_feature: true,
    
    //calculate charges
    no_of_transaction: 0,
    average_transaction_size: 0,
    fee: 0,
    extra_fee: 7,

    //display
    name: 'Easebuzz',
    setup_fee: 'Free',
    annual_fee: 'Free',
    transactional_fee: [
        'Upto ₹1,000 --> ₹4 / transaction',
        'From ₹1,000 - ₹25,000 --> ₹5 / transaction',
        'Above ₹25,000 --> ₹9 / transaction'
    ],
    duration: '10 - 15 minutes'
}

function charges(gateway) {
    let fee = gateway.average_transaction_size * ( gateway.fee / 100 );
        fee = ( fee + gateway.extra_fee ) * gateway.no_of_transaction;
        return fee;
}

const option = ['emi', 'upi', 'wallet', 'card', 'bnpl', 'netbanking', 'neft'];
const option_selected = [];
let sorted_list = [];

function sort_list(gateway) {
    let flag = 0;
    let i = 0;
    for(i=0; i<option_selected.length; i++) {
        if(gateway.methods.includes(option_selected[i])) {
            flag++;
        }
    }
    if(flag == option_selected.length) {
        return true;
    }
    else {
        return false;
    }
 }

 function sort_gateway_list() {
    if(sort_list(cashfree)) {
        sorted_list.push('cashfree');
    }
    if(sort_list(razorpay)) {
        sorted_list.push('razorpay');
    }
    if(sort_list(paytm)) {
        sorted_list.push('paytm');
    }
    if(sort_list(paypal)) {
        sorted_list.push('paypal');
    }
    if(sort_list(payu)) {
        sorted_list.push('payu');
    }
    if(sort_list(billdesk)) {
        sorted_list.push('billdesk');
    }
    if(sort_list(ccavenue)) {
        sorted_list.push('ccavenue');
    }
    if(sort_list(paykyun)) {
        sorted_list.push('paykyun');
    }
    if(sort_list(instamojo)) {
        sorted_list.push('instamojo');
    }
    if(sort_list(easebuzz)) {
        sorted_list.push('easebuzz');
    }
 }

function insert_nooftrans(array, num) {
    array.forEach(element => {
        switch(element) {
            case 'cashfree': {
                cashfree.no_of_transaction = num;
                break;
            }
            case 'razorpay': {
                razorpay.no_of_transaction = num;
                break;
            }
            case 'paytm': {
                paytm.no_of_transaction = num;
                break;
            }
            case 'paypal': {   
                paypal.no_of_transaction = num;
                break;
            }
            case 'payu': {
                payu.no_of_transaction = num;
                break;
            }
            case 'billdesk': {
                billdesk.no_of_transaction = num;
                break;
            }
            case 'ccavenue': {
                ccavenue.no_of_transaction = num;
                break;
            }
            case 'paykyun': {
                paykyun.no_of_transaction = num;    
                break;
            }
            case 'instamojo': {
                instamojo.no_of_transaction = num;
                break;
            }
            case 'easebuzz': {
                easebuzz.no_of_transaction = num;
                break;
            }
        }
    })
}

function insert_avgtrans(array, num) {
    array.forEach(element => {
        switch(element) {
            case 'cashfree': {
                cashfree.average_transaction_size = num;
                break;
            }
            case 'razorpay': {
                razorpay.average_transaction_size = num;
                break;
            }
            case 'paytm': {
                paytm.average_transaction_size = num;
                break;
            }
            case 'paypal': {   
                paypal.average_transaction_size = num;
                break;
            }
            case 'payu': {
                payu.average_transaction_size = num;
                break;
            }
            case 'billdesk': {
                billdesk.average_transaction_size = num;
                break;
            }
            case 'ccavenue': {
                ccavenue.average_transaction_size = num;
                break;
            }
            case 'paykyun': {
                paykyun.average_transaction_size = num;
                break;
            }
            case 'instamojo': {
                instamojo.no_of_transaction = num;
                break;
            }
            case 'easebuzz': {
                easebuzz.no_of_transaction = num;
                break;
            }
        }
    })
}

function initiate() {
    document.getElementsByClassName('body_outer')[0].style.display = 'none';
    document.getElementsByClassName('question-1')[0].style.display = 'flex';
}

function check_1() {
    let count = 0;
    option.forEach(element => {
        if(document.getElementById(element).checked == true) {
            count++;
            option_selected.push(document.getElementById(element).value);
        }
    });
    if(count == 0) {
        document.getElementsByClassName('error')[0].innerHTML = "Please Select the option!"
        return;
    }
    sort_gateway_list();
    console.log(sorted_list);
    document.getElementsByClassName('question-1')[0].style.display = 'none';
    document.getElementsByClassName('question-2')[0].style.display = 'flex';
}

function check_2() {
    //console.log(document.getElementsByName('international')[1].checked);
    if(!document.getElementsByName('international')[0].checked && 
    !document.getElementsByName('international')[1].checked) {
        document.getElementsByClassName('error')[1].innerHTML = "Please Select the option!"
        return;
    }
    
    if(document.getElementsByName('international')[0].checked) {
        sorted_list.forEach(element => {
            switch(element) {
                case 'paykyun': {
                        sorted_list = sorted_list.filter(word => word !== element);
                    break;
                }

                case 'billdesk': {
                        sorted_list = sorted_list.filter(word => word !== element);
                    break;
                }

                case 'easebuzz': {
                        sorted_list = sorted_list.filter(word => word !== element);
                    break;
                }
            }
        }); 
    }
    console.log(sorted_list);
    document.getElementsByClassName('question-2')[0].style.display = 'none';
    document.getElementsByClassName('question-3')[0].style.display = 'flex';
}

function check_3() {
    if(!document.getElementsByName('recurring')[0].checked && 
    !document.getElementsByName('recurring')[1].checked) {
        document.getElementsByClassName('error')[2].innerHTML = "Please Select the option!"
        return;
    }
    
    if(document.getElementsByName('recurring')[0].checked) {
        sorted_list.forEach(element => {
            switch(element) {
                case 'easebuzz': {
                        sorted_list = sorted_list.filter(word => word !== element);
                    break;
                }
            }
        }); 
    }
    console.log(sorted_list);
    document.getElementsByClassName('question-3')[0].style.display = 'none';
    document.getElementsByClassName('question-4')[0].style.display = 'flex';
}

function check_4() {
    if(!document.getElementsByName('partial')[0].checked && 
    !document.getElementsByName('partial')[1].checked) {
        document.getElementsByClassName('error')[3].innerHTML = "Please Select the option!"
        return;
    }
    
    if(document.getElementsByName('partial')[0].checked) {
        sorted_list.forEach(element => {
            switch(element) {
                case 'paytm': {
                        sorted_list = sorted_list.filter(word => word !== element);
                    break;
                }
                
                case 'payu': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }
                
                case 'paykyun': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }
                
                case 'ccavenue': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }

                case 'billdesk': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }

                case 'instamojo': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }

                case 'easebuzz': {
                    sorted_list = sorted_list.filter(word => word !== element);
                break;
                }
            }
        });
    }
    console.log(sorted_list);
    document.getElementsByClassName('question-4')[0].style.display = 'none';
    document.getElementsByClassName('question-5')[0].style.display = 'flex';
}

function check_5() {
    let check_num = parseInt(document.getElementById('nooftrans').value);
    if(Number.isInteger(check_num)) {
        if(!(check_num > 0) || !(check_num < 1000000)) {
            document.getElementsByClassName('error')[4].innerHTML = "Please give a number from 1 to 1000000."
            return;
        }
    }
    else {
        document.getElementsByClassName('error')[4].innerHTML = "Please give a valid number."
        return;
    }

    insert_nooftrans(sorted_list, check_num);
    console.log(sorted_list);
    document.getElementsByClassName('question-5')[0].style.display = 'none';
    document.getElementsByClassName('question-6')[0].style.display = 'flex';
}

function check_6() {
    let check_num = parseInt(document.getElementById('avgtrans').value);
    if(Number.isInteger(check_num)) {
        if(!(check_num >= 100) || !(check_num <= 100000)) {
            document.getElementsByClassName('error')[5].innerHTML = "Please give a number from 100 to 100000."
            return;
        }
    }
    else {
        document.getElementsByClassName('error')[5].innerHTML = "Please give a valid number."
        return;
    }

    insert_avgtrans(sorted_list, check_num);
    console.log(sorted_list);
    document.getElementsByClassName('question-6')[0].style.display = 'none';
    document.getElementsByClassName('question-7')[0].style.display = 'flex';
}

function check_7() {
    if(!document.getElementsByName('features')[0].checked && 
    !document.getElementsByName('features')[1].checked) {
        document.getElementsByClassName('error')[6].innerHTML = "Please Select the option!"
        return;
    }
    sorted_list.forEach(element => {
        if(element == 'billdesk') {
            sorted_list = sorted_list.filter(word => word !== element);
        }
    })
    console.log(sorted_list);
    document.getElementsByClassName('question-7')[0].style.display = 'none';
    generateTable();
}
  
function generateTable() {
    sorted_list.forEach(element => {
        switch(element) {
            case 'cashfree': {
                console.log('Hi1');
                Insert_Data(cashfree);
                break;
            }
            case 'razorpay': {
                Insert_Data(razorpay);
                break;
            }
            case 'paytm': {
                Insert_Data(paytm);
                break;
            }
            case 'paypal': {   
                Insert_Data(paypal);
                break;
            }
            case 'payu': {
                Insert_Data(payu);
                break;
            }
            case 'billdesk': {
                Insert_Data(billdesk);
                break;
            }
            case 'ccavenue': {
                Insert_Data(ccavenue);
                break;
            }
            case 'paykyun': {
                Insert_Data(paykyun);
                break;
            }
            case 'instamojo': {
                Insert_Data(instamojo);
                break;
            }
            case 'easebuzz': {
                Insert_Data(easebuzz);
                break;
            }
        } 
    });
}
table_heading = ['Company', 'Charges', 'Set-up Fee', 'Annual Fee', 'Transactional Fee', 
                 'On-boarding time'];
let first = 1;

const tbl = document.createElement("table");
//const tblbody = document.createElement("tbody");
function Insert_Data(gateway) {
    if(first == 1) {
    //const tblhead = document.createElement("thead");
    const rowh = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement("th");
        cell.innerHTML = table_heading[j];
        rowh.appendChild(cell);
    }
    //tblhead.appendChild(rowh);
    tbl.appendChild(rowh);
    first = first + 1;
    }

    //const tblbody = document.createElement("tbody");
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.innerHTML = gateway.name;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.innerHTML = charges(gateway);
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.innerHTML = gateway.setup_fee;
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.innerHTML = gateway.annual_fee;
    row.appendChild(cell4);

    const cell5 = document.createElement("td");
    const ul = document.createElement("ul");
    for(let i = 0; i<gateway.transactional_fee.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = gateway.transactional_fee[i];
        ul.appendChild(li);
    }
    cell5.appendChild(ul);
    row.appendChild(cell5);

    const cell6 = document.createElement("td");
    cell6.innerHTML = gateway.duration;
    row.appendChild(cell6);

    //tblbody.appendChild(row);
    tbl.appendChild(row);
    document.body.appendChild(tbl);  
} 
