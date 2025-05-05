JVM, JDK, JRE?
JVM = Java Virtual Machine executa o bytecode do Java
JRE = Java Run Time (Inclui a JVM) que deve ser instalada na maquina ou appliance para rodar o Java.
JDK = Java Development Kit para desenvolvimento em Java

Qual a diferença entre Boolean e boolean com b minusculo?
Boolean é o Wrapper e pode receber True, False e null e boolean é um tipo primitivo que pode receber True ou False. 

Quais são as principais diferenças entre versões de Java LTS 8 11 17 21?
Java 8 Streams, Lambda Expressions, method reference (::), Optional e Time API (LocalDate,LocalDateTime,ZonedDateTime,Duration)
Java 11 Primeira LTS com VAR (Java 10), HttpClient, List.of(), String.isBlank()
Java 17 Foi a primeira LTS com Records (Java 16), Stream.toList (Java 16), Switch Expressions, Sealed Classes, ZGC (Garbage Collector), Pattern Matching instaceof
Java 21: Virtual Threads, Pattern Matching Switch

Quais as vantagens de usar Pattern Matching Switch Expressions? Escreva a sintaxe:
Menos boilerplate, a sintaxe com Pattern Matching Switch Expressions é minima e sem "break;"
String s = switch (char) { 
case X, Y -> "this"
default -> "other"
};

Qual diferença entre um Stream.Map() e Stream.ForEach() ?
Map retorna uma nova Stream com valores modificados possivelemte .toList() ou .collect(Collectors.toList()) antes do Java 16.
ForEach executa uma ação em cada elemento do Stream e não tem retorno.

O que é uma RECORD em Java?
É uma Classe especial que é Imutável todos os campos são FINAL e sua sintaxe usa somente o construtor

Qual diferença entre um Set e List em Java? Quais são as principais implementaçoes e diferenças entre elas?
Set não permite Duplicados - HashSet, LinkedHashSet (mantém ordem de inserção) e TreeSet (mantém ordem de acordo com comparador em estrutura de Arvore)
List permite Duplicados e pode ser acessado por indice - ArrayList , LinkedList  e Vector (Sincronizado mas raramente usado)

Java é Totalmente Orientado a Objeto?
Não porque suporta tipos primitivos (boolean,int,long,float,byte)

Quais são os modificadores de acesso em Java? Explique cada um.
Public = Qualquer lugar da aplicaçao acessa
private = Somente a Classe acessa
protected = Somente a Classe e subclasses (Heranças dessa classe)
padrão / package = Quando nenhum é especificado somente as dentro do pacote acessam essa classe.

Qual a diferença entre métodos estáticos e não estáticos em Java?
Metodo Estatico = usa a keyword STATIC e é Padrão da Classe sem necessidade de instanciar ela, normalmente para calculos e helpers
Metodo de instancia = Métodos daquela instancia com os valores de conteúdo dele sem a keyword STATIC.


Quais as diferenças entre == e equals() em Java?
== - Compara referências de objetos e para primitivos os valores.
equals() - Compara conteúdo do objeto e pode ser sobrescrito para comparações especializadas. 

Quais são e melhores usos dos Garbage Collectors do Java?
Concurrent Mark-Sweep (CMS) Collector - Legado - Marca e limpa em fases separadas e concorrentes com o app, poucas pausas mas pode gerar fragmentação.
Serial Garbabe Collector - Single thread GC, para embarcados.
Parallel Garbabe Collector - Multi thread GC, para CPU intensive onde latência não preocupa muito.
G1 Garbage Collector - Coletor para grandes memorias Heap. Divide a memória em regiões , Bom equilíbrio entre pausas e coletas eficientes.
Z Garbage Collector (ZGC) - Coletor de baixa latência, Pausas muito curtas.
Shenandoah Garbage Collector - Coletor de baixa latência e otimizar a movimentação de objetos.

Quais exceções são verificadas na compilação?
As checked exception são as  que estão na assinatura dos metodos ou em Thows e geram erro de compilação caso não forem tratadas.

Explique a Keyword FINAL.
Ela é para marcar que a variável, metodo ou classe não pode ser alterada, basicamente criando uma constante usando o conceito de imutabilidade.

Quais são os tipos de operadores existem em Java?
Operadores Aritméticos -> + - * / %
Operadores de Atribuição -> = += -= *= /= %=
Operadores de Comparação -> == != > >= < <=
Operadores Lógicos -> && || !
Operadores Bitwise -> & | ^ ~ << >> >>>
Operadores Unários -> + - ++ --
Operadores Ternários -> ?
Operadores de Instância -> instanceof

Quais são as opções para implementar multithreading em Java?
Plataform Threads (Processador/SO) - Runnable + Thread
Virtual Threads (Green threads) - São Threads gerenciadas pela JVM portanto mais leves e podem ser criadas várias enquanto executam.
Executor - TODO EXPLICAR

Como você pode criar uma Thread em Java?
Extendendo a Classe Thread = extends Thread{ @Override run(){ } }
Implementando Runnable = implements Runnable{ @Override run(){ } }
Nos dois casos é necessário chamar o .start() para começar a execução.

Como você pode criar uma Virtual Thread em Java?
Thread mvThread = Thread.ofVirtual().start(() -> { });

Quais principais problemas ao usar Virtual Threads em Java? Como soluciona-los?
1 - O sistema pode aumentar o throughput e portanto ocasionar falhas nos próximos serviços a serem chamados, para mitigar podemos pensar em rate limiting e também circuit breaker com exponencial backoff.
2 - Gerenciamento de Recursos como Rede ou Conexões com BD, podemos mitigar com semáforos ou pools de conexões. 

Quais são os principais tipos de implementações de Executor?
ThreadPoolExecutor: Gerencia um pool de threads reutilizáveis.
ScheduledThreadPoolExecutor: Permite agendar tarefas para execução futura.
SingleThreadExecutor: Garante que as tarefas sejam executadas em uma única thread.

O que é uma MARKER INTERFACE em Java? Exemplifique.
Marker interfaces em Java são interfaces que não contêm métodos ou constantes, mas servem para marcar ou identificar classes que implementam essas interfaces. Ex: Serializable

Como crio uma Exceção em Java?
Para criar uma exceção é só Criar uma Classe que estenda Exception ex: NomeExcetion extends Exception  
Para usar a Exception é só dar Thow new NomeException("Nome")

Tratamento de Exceção em Java?
Try-catch ou Try-with-Resources

Qual a diferença entre Try-catch e Try-with-Resources ?
Try Catch Finally você precisa declarar e liberar os recursos após o uso no finally com ou sem exceção. Pode ocasionar Memory leaks.
Try-with-resources é um Try-Catch com AutoCloseable os recursos declarados no try(...) fecham automaticamente mesmo com exceção Ex: 
try(FileReader r = new FileReader("")){ 
}catch(IOException e){ // }
}

Testes
Quais ferramentas são as mais usadas para testes em Java?
JUnit para teste unitário.
Mockito para Mocks em testes.
TestContainers para testes Integrados.
