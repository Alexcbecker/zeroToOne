(function() {
    'use strict';

    let usuarios = buscarUsuarios();
    eventos();

    if (usuarios.length == 0) {
        $('#tblUsuarios').append(
            `<tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
            /<tr>`
        );
    }
    else {
        for (var index in usuarios) {
            $('#tblUsuarios').append(
                `<tr>
                    <td><input type="checkbox" name="check${usuarios[index].id}"></td>
                    <td> ${usuarios[index].id} </td>
                    <td> ${usuarios[index].nome} </td>
                    <td> ${usuarios[index].sobrenome} </td>
                    <td> ${usuarios[index].email} </td>
                    <td> ${usuarios[index].setor} </td>
                /<tr>`
            );
        }
    }

    function eventos() {
        $('#btn-consultar').click(consultar);

        function consultar() {
            let numLinhas = $('#tblUsuarios').find('input[type=checkbox]:checked');
            switch (numLinhas) {
                case 0: 
                    break.
                case 1:
                    // ok
                default:
                    // error
            }
        }
    }
})();