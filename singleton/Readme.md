### Trabalho final Engenharia de Software II ### 


### Descrição: ###
O Singleton é um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

### Aplicaçabilidade ###
O Singleton deve ser usado quando uma classe precisa ter somente uma instância disponível em todo seu programa

Também pode ser usado quando você perceber que esta usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação

### Pontos positivos e negativos do Singleton: ###
Utilizar a versão de inicialização direta, ainda na declaração da instância Singleton, pode trazer problemas de desempenho se seu software não for utilizar com frequência a classe que implementa o padrão.

### Conclusão: ###
Recomendo utilizar o Singleton na circustância de que a classe que está sendo utilizada precisa somente de uma instância no projeto.
Ter somente uma instância sendo utilizada devido a quantidade de usuários ou a alguma limitação atual do software não implica em sempre ter de utilizar somente uma instância.