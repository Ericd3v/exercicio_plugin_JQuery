$(document).ready(function() { 
    $('#carrosel-images').slick({ /*comando de carrosel de imagem*/
        autoplay: true, /*comando de rolagem automatica no carrossel*/
    });
    
    $('.menu').click(function() {  /*chamada da função de evento ao clicar no 'hamburguer'*/
        $('nav').slideToggle(); /*verificação se o slide esta 'escondido' no modo up e quando for clicado sera feito o down 'descer'*/
    })
    
    $('#cep').mask('0000-0000') /* Validação para colocar o cep */
    $('#cpf').mask('000.000.000-00') /* Validação para colocar o numero do CPF */
    $('#telefone').mask('(00) 000000-0000') /*Valiação para numero de contato, Chama o plugin do Jquery*/
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email : {
                required: true,
                email: true
            },
            telefone : {
                required: true,
            },
            mensagem : {
                required: true,
            },
            veiculo: {
                required: false,
            },
            cep : {
                required: true,
            },
            cpf : {
                required: true,
            },
            endereco : {

                required: true,
            }
        },
        messages : {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            veiculo: 'Por favor, insira seu veiculo de interesse',
            cep: 'Por favor, insira seu CEP',
            endereco: 'Por favor, insira seu endereço',
            cpf: 'Por favor, insira seu CPF',
            mensagem: 'Por favor, insira sua mensagem'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
        $('.lista-veiculos button').click(function() { /* Ao clicar no botão de 'tenho nteresse' o usuario é encaminhado para parte de entrar em contato, o form
        evento de click no botão. */
            const destino = $('#contato');
            
            const nomeVeiculo =  $(this).parent().find('h3').text(); /* Adiciona ao campo de interesse o nome do veiculo selecionado */

            $('#veiculo').val(nomeVeiculo);

            $('html').animate({ /* Evento de rolagem */
                scrollTop: destino.offset().top
            }, 1000)
        })
    
})