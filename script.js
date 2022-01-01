const addRow = () => {
    const btn = document.querySelector('.add'),
        table = document.querySelector('table');
    btn.addEventListener('click', () => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td class='name-row'><input type='text' class='name-input'></td>
        <td class='no-milk-rate'></td>
        <td class='with-milk-rate'></td>
        <td class='have-now'>
            <label>Да
                <input type='checkbox' class='have-now-radio' name='availability' value='yes'>
            </label>
        </td>
        <td class='description'><input type='text' class='description-input'></td>
        `;
        table.append(row);
    });
};
addRow();

const saveInfo = () => {
    const coffeTable = {},
        rows = [],
        // rowInfo = {},
        nameInput = document.querySelector('.name-input'),
        descInput = document.querySelector('.description-input'),
        saveBtn = document.querySelector('.save'),
        checkbox = document.querySelector('.have-now-radio'),
        rateInputs = document.querySelectorAll('.no-milk-rating'); 
let noMilkRate = 0;
    const saveRow = (name, no_milk_rate, with_milk_rate, have_now,  description) => {
        const rowInfo = {
            name,
            no_milk_rate,
            with_milk_rate,
            have_now,
            description 
        };
        rows.push(rowInfo);
        console.log(rows);
    };
    saveBtn.addEventListener('click', () => {
        rateInputs.forEach(item => {
            if (item.checked) {
                noMilkRate = +item.value;
            }
        });

        saveRow(nameInput.value, noMilkRate, 10, checkbox.checked, descInput.value);
    });
};
saveInfo();