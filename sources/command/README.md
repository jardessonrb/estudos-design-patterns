# Command

### Sobre o command
Este padrão tem a intenção de encapsular uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.

### Sobre o exemplo
Usamos nesse exemplo uma casa inteligente, ou seja, que pode receber diferentes tipos de comandos de coisa dentro dessa casa, ou seja, uma lampada, na qual pode ligar e desligar, porém essa lampada é encapsulada em um command que executa as ações necessárias para essa lampada ligar e desligar, fazendo com no final a casa receba a interface command que ser chamadom vai executar a ação da lampada. Em resumo, posso chamar apenas os commands, que cada command irá abstrair a classe por baixo,ou seja, poderia ser uma geladeira ligar ou desligar, ou o portão, que seria abrir ou fechar e por aí em diante.

### Referências
 - [Command no refactoring](https://refactoring.guru/design-patterns/command)
 - [Canal no Youtube - Otavio Miranda](https://youtu.be/-lRzadP9kJQ)