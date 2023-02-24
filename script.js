const selected = [];
const heading = ['Company', 'Set-up fee', 'Annual fee', 'Transactional fee', 'Payment Methods', 'Currencies', 'Onboarding time', 'eCommerce platform'];
const cash = ['CashFree', 'Free', 'Free', '1.90% on Net Banking, Wallets, Debit/Credit cards', 'UPI, EMI, Wallets, Cards', 'INR, USD, BDT', '2-4 days', 'WooCommerce, Magento, Shopify'];
const razor = ['RazorPay', 'Free', 'Free', '2% on Net Banking, UPI, Wallets, Debit/Credit cards', 'NEFT, RTGS, IMPS, UPI', 'INR, AUD, GBP, USD', '4-5 days', 'All leading CMS'];
const paytm = ['Paytm', 'Free', 'Free', '18% GST + 1.80% on Net Banking', 'UPI,Debit/Credit Card,NetBanking', 'All active currencies', 'Approvals are subject to KYC completion', 'Magento'];
const paypal = ['PayPal', 'Free', 'Free', '5% + 3 INR', 'NetBanking, Wallets, Cash cards', 'INR,USD,GBP,CAD', 'within 30 days', 'any eCommerce CMS platform'];
const payu = ['PayU', 'Free', 'Free', '2% + GST', 'EMI,UPI,NetBanking,Cards', '100+ foreign currencies', '1-2 days', 'Any CMS'];
const ippo = ['Ippopay', 'Free', 'Free', '1.9% for credit, debit and NetBanking', 'Credit/Debit cards, NetBanking, UPI', 'USD,EUR,GBP,INR', 'Within 24 hours', 'React JS, Python, PHP, Java'];
const bill = ['Bill desk', 'Free', 'INR 30000', '0.90% of every transaction + 18% GST', 'Credit/Debit cards, NetBanking', '70+ major currencies', '1-2 days', 'Magento'];
const cc = ['CCAvenue', 'Free', 'INR 1200', '2% on Credit/Debit card, Wallte, NetBAnking', '200+', 'INR + 27 foreign', '1-2 days', 'Magento, Opencart, Zencart, Drupal'];
const ebs = ['EBS', 'Free', 'Free', '2% for any transaction', '100 different method', '27 international currencies', '1-2 days', 'Magento, Opencart, Shopify'];
const paykun = ['PayKun', 'Free', 'Free', '1.75% for domestic transaction + GST', 'UPI, Wallet, Debit/Credit card', 'Only INR', '1 hour', 'Cross-platform integrations'];
const insta = ['Instamojo', 'Free', 'Free', '2% + INR 3 for EMI, NetBanking, Wallets', '170+ payment methods', 'Only INR', '2-3 days', 'Magento and OpenCart'];
const ease = ['EaseBuzz', 'Free', 'Free', 'Debit/Credit card, NetBanking', 'INR only', '5-10 minutes', 'Easy PnO CMS-agnostic'];

const select = (num) => {
    switch (num) {
        case 1:
            selected.push('cash');
            break;
        case 2:
            selected.push('razor');
            break;
        case 3:
            selected.push('paytm');
            break;
        case 4:
            selected.push('paypal');
            break;
        case 5:
            selected.push('payu');
            break;
        case 6:
            selected.push('ippo');
            break;
        case 7:
            selected.push('bill');
            break;
        case 8:
            selected.push('cc');
            break;
        case 9:
            selected.push('ebs');
            break;
        case 10:
            selected.push('paykun');
            break;
        case 11:
            selected.push('insta');
            break;
        case 12:
            selected.push('ease');
            break;
        default:
            console.log('Incorrect input!!!');
    }
}

const show = () => {
    let table = document.getElementById('compare');
    for (let i = 0; i <= selected.length; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 8; j++) {
            if (i === 0) {
                let col = row.insertCell(j);
                col.innerHTML = heading[j];
            }
            else {
                switch (selected[i - 1]) {
                    case 'cash':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = cash[j];
                            break;
                        }
                    case 'razor':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = razor[j];
                            break;
                        }
                    case 'paytm':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = paytm[j];
                            break;
                        }
                    case 'paypal':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = paypal[j];
                            break;
                        }
                    case 'payu':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = payu[j];
                            break;
                        }
                    case 'ippo':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = ippo[j];
                            break;
                        }
                    case 'bill':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = bill[j];
                            break;
                        }
                    case 'cc':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = cc[j];
                            break;
                        }
                    case 'ebs':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = ebs[j];
                            break;
                        }
                    case 'paykun':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = paykun[j];
                            break;
                        }
                    case 'insta':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = insta[j];
                            break;
                        }
                    case 'ease':
                        {
                            let col = row.insertCell(j);
                            col.innerHTML = ease[j];
                            break;
                        }
                }
            }
        }
    }
}