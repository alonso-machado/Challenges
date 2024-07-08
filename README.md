# Challenges for Back-end Devs
Helping to improve Software Developers
Please Fork this Project to Start these Challenges and Open a Pull Request with the link to your Repo if you are one of my mentees

Before Starting: Please Setup one SonarQube Docker Instance for your challenge project and try to stay with 85% code coverage and no code smells.


## Challenge 1:  CRUD com Testes + Docker File

### Requisito BASE: Criar uma web API CRUD em qualquer linguagem de programaçao com BD web (Usar neon, turso, supabase, planetscale, mongoAtlas ou outra..).

* Requisito 1:  Dockerfile para subir o localmente o projeto.
* Requisito 2:  Testes Unitários e Integrados (Integrados de preferencia mockando só o DB.
* Requisito 3:  Use Copilot or Codeium or other IA for helping you only on tests
* Requisito 4:  Github publico e tudo explicado no README (Imagem se necessário)
* Requisito 5:  Github Actions para publish imagem do projeto no Dockerhub

> Para Nível Pleno:  Além do Challenge BASE:
> * Requisito Pleno 1: Docker Compose subindo o projeto e BD local para ambiente DEV.
> * Requisito Pleno 2: Um microserviço de autenticacao de admin / users para o CRUD do challenge base requests para https://randomuser.me/ (Salve uns 3 users desse como admin em cache no servico e bd e o restante user normal)
> * Requisito Pleno 3: Imagem da arquitetura no README
> * Requisito Pleno 4: Github Actions para deploy do projeto na AWS ou AZURE ou GCP (Free Tier)

### Até Quarta-feira dia 04/08/2024 as 22:00 de SP

> Ponto Extra:
> * Requisito Extra BASE: TestContainers
> * Requisito Extra Pleno: Messageria entre o Microservico de autenticacao e o CRUD. 

-------------------------------------------

## Challenge 2: Versioning + Caching 

### Requisito BASE: Versioning and DragonFly or KeyDB for caching the requests from Challenge 1

* Req 1: Create a new version with endpoints /v2/ with New Endpoints: Get All Entities, Search by Name of Entity (Desc ou Asc), Create ENUM that make sense for your CRUD and one endpoint to get all from that ENUM with validation.
* Req 2: Choose from https://www.dragonflydb.io/ or https://docs.keydb.dev/ that are multithread alternatives for REDIS for caching the new endpoints and also the Get One Entity. (DO NOT USE REDIS or VALKEY)
* Req 3: Keep the old CRUD from Challenge 1 on /v1/ still online
* Req 4: Github Actions -> deploy project on AWS / AZURE / GCP (Free Tier)

> Next Level:  Challenge BASE +
> * Req Mid-Level 1: Benchmark DragonFly and Keydb and ValKey and Redis with your CRUD V2 endopoints using k6 or gatling (Please at least 100k requests for each endpoint for timing)
> * Req Mid-Level 2: Use RabbitMQ to send messages from CRUD V2 to AUTHENTICATION Service from Challenge 1
> * Req Mid-Level 3: Get All Paged by limit and Offset

### Due date 21/10/2024 22:00 GMT-3 (America/Sao Paulo)

> Ponto Extra:
> * Req Extra: Rate Limiting

-------------------------------------------

## Challenge 3: New Frontier - MonoRepo

* Req 1: Create a new CRUD Microservice in the same Github Project (MonoRepo) and this new will comunicate with the Challenge 1 via tRPC or Protobuff 
* Req 2: Architecture Image on README
* Req 3: Kubernetes with Api Gateway and Loadbalancer and 2 Pods of each CRUD (Challenge 1 and Challenge 3) 

> Next Level:  Challenge BASE +
> * Req Mid-Level 1: Use KEDA to scale horizontly the Application
> * Req Mid-Level 2: Use KEDA to scale horizontly the Application

### Due date 10/12/2024 22:00 GMT-3 (America/Sao Paulo)
