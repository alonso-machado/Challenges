Quantos são e quais são os Pilares da orientação a Objeto:
São 4 pilares, Abstração, Herança, Encapsulamento e Polimorfismo

# SOLID:
Single Responsability Principle / SRP (Princípio da Responsabilidade Única) - Cada classe resolve somente um problema específico
Open Closed Principle / OCP (Princípio Aberto/Fechado) - Classes devem ser extendidas e não modificadas para não quebrar comportamentos. Ex: Usar subclasses e Heranças.
Liskov Substitution Principle / LSP (Princípio de Substituição de Liskov) (Barbara Liskov) Subclasse deve substituir a super classe (Classe que ela herdou) para não quebrar contratos.
Interface Segregation Principle / ISP (Princípio de Segregação de Interfaces) Interfaces específicas para que as classes implementem somente o necessário. Ex: Galinha extends Ave, AveVoo
Dependency Inversion Principle / DIP (Princípio de Inversão de Dependência) Classe deve depender de abstrações e não implementações. Isso serve para facilitar mudanças nas camadas mais abaixo sem  alterar código exemplo clássico: Alterar o Banco de Dados.

# Clean Code:
Código Legível (Tentar deixar o seu código compreensível afinal nós DEVs lemos de 8 a 10X mais código que escrevemos)
Funções curtas e focadas (Single Responsability Principle do SOLID) 
Nomes Significativos de variáveis e funções
Testes Automatizados
DRY (Não repetir código / reusar código)

# O que é MVC?
Model-View-Controller é um padrão de arquitetura de software, onde Model representa os dados, View é a visão (Front-end) e Controller é o como os dados chegam da View para a Model. normalmente REST, mas existe SOAP e GraphQL

# Compare os padrões arquiteturais MVC, MVP e MVVM?
** Model-View-Controller e Model-View-Presenter são similares a diferença está na VIEW.
** MVP a View deve ser passiva, não deve conter lógica, apenas apresentar dados e receber entradas do usuário.
** MVC a View é mais Ativa pode ter lógicas de interação.
** Model-View-ViewModel usa Data Binding que permite que a View e o ViewModel se comuniquem de forma automática e bidirecional e é mais usado em MOBILE.

# Qual é a diferença entre FILA (QUEUE) e PILHA(STACK)?
Pilha = LIFO (Last In First Out)
Fila = FIFO (First In First Out)

# O que é versionamento de código? Quais ferramentas existem? E principais implementações delas?
Versionamento de código é o processo de gerenciar mudanças em arquivos de código-fonte ao longo do tempo.
GIT - É Distribuído e Open Source, GitHub , GitLab e Bitbucket
Mercurial - É Distribuído e Open Source, Normalmente on-premise.
SVN - É Centralizado, normalmente on-premise.
Sappling - Closed-Source META/FACEBOOK.

# O que é uma Pull Request (PR) e Stacked Diff?
PR é uma solicitação de Merge para a uma outra Brach onde seu código será revisado e possivelmente passarão testes automatizados na pipeline...
Stacked Diff é um conceito mais novo onde para revisão de código se cria uma pilha de PRs ou commits que podem ser analisadas separadamente, permite merge parcial. É usada principalmente pela META/FACEBOOK na sua ferramenta open source Phabricator (Deprecated) / Sapling / Reviewstack.dev e pela start-up Graphite.dev 
DICA Do Alonso: https://newsletter.pragmaticengineer.com/p/stacked-diffs + https://graphite.dev/guides/how-do-stacked-diffs-work

# O que é Design Patterns? Explique os tipos com exemplos.
Padrão Criacional = Criar objetos de maneiras especificas Ex: Singleton,Factory
Padrão Estrutural = Estruturaro sistema para melhor manutenção e extensibilidade Ex: Facade, Adapter, Decorator, Proxy
Padrão Comportalmental = Interaçoes entre objetos Ex: Observer (Pub/Sub), Strategy
** DICA do Alonso: https://refactoring.guru/pt-br/design-patterns
