(function() {
    'use strict';

    let usuarios = getTodosUsuarios(),
        tabela = $('#usuariosTbl').DataTable({ select: true });
    eventos(tabela);

    if (!usuarios.length) {
        tabela.row.add(['-', '-', '-', '-', '-']).draw(false);
    }
    else {
        for (var idx in usuarios) {
            tabela.row.add([
                usuarios[idx].id,
                usuarios[idx].nome,
                usuarios[idx].sobrenome,
                usuarios[idx].email,
                usuarios[idx].setor
            ]).draw(false);
        }
    }

    function eventos(tabela) {
        $('#btn-consultar').click(function() {
            let linhas = tabela.rows({selected: true}).data().toArray();
            
            if (linhas.length != 1) {
                window.alert('Selecione uma e não mais linhas para consultar!');
            }
            else {
                var l = linhas[0];
                window.location.href = `consultar.html?id=${l[0]}`;
            }
        });
        $('#btn-alterar').click(function() {
            let linhas = tabela.rows({selected: true}).data().toArray();
            
            if (linhas.length != 1) {
                window.alert('Selecione uma e não mais linhas para alterar!');
            }
            else {
                var l = linhas[0];
                window.location.href = `alterar.html?id=${l[0]}`;
            }
        });
        $('#btn-excluir').click(function() {
            let linhas = tabela.rows({selected: true}).data().toArray();
            
            if (linhas.length != 1) {
                window.alert('Selecione uma e não mais linhas para excluir!');
            }
            else {
                var l = linhas[0];
                window.location.href = `excluir.html?id=${l[0]}`;
            }
        });
    }
})();