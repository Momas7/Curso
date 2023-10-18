
$('form').on('submit', function(e) {
    e.preventDefault();

    const enderecoDaNovaTarefa = $('#tarefa').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`${enderecoDaNovaTarefa}`).appendTo(novoItem);

    $(`
        <div class="lista-tarefa">
            ${enderecoDaNovaTarefa}
        </div>
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#tarefa').val('');
    $('ul').on('click','li',function(){

        $(this).css('text-decoration', 'line-through');

    }) 


})

