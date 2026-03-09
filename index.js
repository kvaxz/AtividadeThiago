document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('vehicleForm');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            modelo: form.modelo.value,
            marca: form.marca.value,
            cor: form.cor.value,
            ano: Number(form.ano.value)
        };

        console.log('Veículo cadastrado:');
        console.table(data);

        alert('Veículo cadastrado com sucesso!');

        form.reset();
    });

});