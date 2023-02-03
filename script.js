const selected = [];
const heading = ['Company', 'Set-up fee', 'Annual fee', 'Transactional fee', 'Payment Methods', 'Currencies', 'Onboarding time', 'eCommerce platform', 'Clients']

const select = (num) => {
    switch (num) {
        case 1:
            selected.push(1);
            break;
        case 2:
            selected.push(2);
            break;
        case 3:
            selected.push(3);
            break;
        case 4:
            selected.push(4);
            break;
        case 5:
            selected.push(5);
            break;
        case 6:
            selected.push(6);
            break;
        case 7:
            selected.push(7);
            break;
        case 8:
            selected.push(8);
            break;
        case 9:
            selected.push(9);
            break;
        case 10:
            selected.push(10);
            break;
        case 11:
            selected.push(11);
            break;
        case 12:
            selected.push(12);
            break;
        default:
            console.log('Incorrect input!!!');
    }
}

const show = () => {
    let table = document.getElementById('compare');
    // let row = table.insertRow(0);
    // let col1 = row.insertCell(0);
    // let col2 = row.insertCell(1);
    // col1.innerHTML = 'Cashfree';
    // col2.innerHTML = 'Free';
    for (let i = 0; i <= selected.length; i++) {
        let row = table.insertRow(0);
        for (let j = 0; j < 9; j++) {
            if (i === 0) {
                let col = row.insertCell(j);
                col.innerHTML = heading[j];
            }
            else {
                
            }
        }
    }
}