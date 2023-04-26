const listaUsers = () => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            const tabela = document.querySelector('tbody');

            tabela.innerText = '';

            data.forEach(item => {
                const tr = document.createElement('tr');
                const td_id = document.createElement('td');
                const td_name = document.createElement('td');
                const td_email = document.createElement('td');
                const td_street = document.createElement('td');
                const td_suite = document.createElement('td');
                const td_city = document.createElement('td');
                const td_phone = document.createElement('td');
                const td_companyName = document.createElement('td');

                td_id.innerText = item.id;
                td_name.innerText = item.name;
                td_email.innerText = item.email;
                td_street.innerText = item.address.street;
                td_suite.innerText = item.address.suite;
                td_city.innerText = item.address.city;
                td_phone.innerText = item.phone;
                td_companyName.innerText = item.company.name;

                // console.log(item.id);

                tr.appendChild(td_id);
                tr.appendChild(td_name);
                tr.appendChild(td_email);
                tr.appendChild(td_street);
                tr.appendChild(td_suite);
                tr.appendChild(td_city);
                tr.appendChild(td_phone);
                tr.appendChild(td_companyName);

                tabela.appendChild(tr);


            })
                //.catch(err => console.log('Erro de solicitação', err));


        })

}

listaUsers();

const pesquisarId = () => {

    let idPesquisa = prompt("Pesquisar Id");
    const pesquisaPorId = () => {
        
    }

}


const pesquisarNome = () => {

    let nomePesquisa = prompt("Pesquisar Nome");
    const pesquisaPorNome = () => {
        
    }


}

