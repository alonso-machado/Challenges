# Take Home Challenges for Back-End Developers

**This Take-Home Challenges will take about 3 to 5 months of Study and Effort for real world like scenarios.**

For Design Patterns Bookmark this Amazing Resource: [https://refactoring.guru/design-patterns](https://refactoring.guru/design-patterns/catalog) - [https://refactoring.guru/design-patterns](https://refactoring.guru/pt-br/design-patterns/catalog)

**Please Fork this Project to Start these Challenges and Open a Pull Request with the link to your Public Github Repo fot this Challenges if you are one of my mentees**

**Tip:** Install PODMAN DESKTOP it is 98% of the time better and safer (no daemon and no root) and usually faster then Docker for using Containers.... (Except for Docker Swarm and some Plugins)

Before Starting: Please Setup one SonarQube Docker Instance for your challenge project and try to stay with 85% code coverage and no code smells. (docker pull sonarqube:community)

## Challenge 1:  CRUD + Tests + DockerFile

### Requisito BASE: Criar uma web API CRUD em qualquer linguagem de programaçao com BD web (Usar neon, turso, supabase, planetscale, mongoAtlas ou outra..) sobre um tema de seu interesse (Café, Academia, Pedidos no Restaurante)

* Req 1:  Dockerfile
* Req 2:  Unit test + Integration Tests of Service Layer (Mock only the DB if possible).
* Req 3:  Use Copilot or Codeium or other IA for helping you only on tests
* Req 4:  Github + README with explanation (Image is a plus)
* Req 5:  Github Actions to publish into Dockerhub

> Next Level: Challenge +
> * Req Mid-Level 1: Docker Compose with Challenge and a postgres 17 with Alpine for local Development.
> * Req Mid-Level 2: One extra microservice for Authentication/Authorization get users from https://randomuser.me/ (Save 3 users as admin in the DB e all the other 97 users should be regular user)
> * Req Mid-Level 3: README must have Image of System Design and Database
> * Req Mid-Level 4: Github Actions to deploy in AWS / AZURE / GCP (Free Tier)

### Due date: Challenge V1 should take about a month, if you took more then that you have a "GAP" in some technology or tool, focus on that then submit the Pull Request Again!...

> Bonus Points:
> - [x] Junior: TestContainers
> - [x] Mid-Level: Messageria entre o Microservico de autenticacao e o CRUD. 

-------------------------------------------

## Challenge 2: Versioning + Caching 

### Requirement: Versioning and DragonFly or KeyDB for caching the requests from Challenge 1

* Req 1: Create a new version with endpoints "/v2/" with New Endpoints: Get All Entities Paged, Search by Name of Entity (Desc ou Asc) via QUERYPARAMS, Create ENUM that make sense for your CRUD and one endpoint to get all from that ENUM with validation.
* Req 2: Choose from https://www.dragonflydb.io/ or https://docs.keydb.dev/ that are multithread alternatives for REDIS for caching the new endpoints and also the Get One Entity. (DO NOT USE REDIS or VALKEY)
* Req 3: Keep the old CRUD from Challenge 1 on Enpoints starting with "/v1/" still online
* Req 4: Github Actions -> deploy project on AWS / AZURE / GCP (Free Tier)
* Req 5: OpenAPI Docs for ALL Endpointds (OLD v1 / NEW V2)

> Next Level: Challenge +
> * Req Mid-Level 1: Benchmark DragonFly and Keydb and ValKey and Redis with your CRUD V2 endopoints using k6 or gatling (Please at least 100k requests for each endpoint for timing)
> * Req Mid-Level 2: Use RabbitMQ to send messages from CRUD V2 to AUTHENTICATION Service from Challenge 1
> * Req Mid-Level 3: Get All Paged by limit and Offset

### Due date: TWO months after Challenge 1  

> Bonus Points:
> - [x] Mid-Level: Rate Limiting

-------------------------------------------

## Challenge 3: New Frontier - MonoRepo

* Req 1: Create a new CRUD Microservice in the same Github Project (MonoRepo) and this new will comunicate with the Challenge 1 via tRPC or gRPC 
* Req 2: Architecture Image on README
* Req 3: Kubernetes with Api Gateway and Loadbalancer and 2 Pods of each CRUD (Challenge 1 and Challenge 3)
* Req 4: Update OpenAPI to deprecate v1 Endpoints BUT DO NOT REMOVE THEM! (We are trying to simulate deprecation in real world cenarios usually 6 to 12 months time for clients to migrate)
* Req 5: HealthCheck and Status endpoints 

> Next Level: Challenge  +
> * Req Mid-Level 1: Use KEDA to scale horizontly the Application
> * Req Mid-Level 2: Configure your Kubernetes Deployment with Graceful Shutdown
> * Req Mid-Level 3: Observability with OpenTelemetry
> * Req Mid-Level 4: Grafana

### Due date: TWO months after Challenge 2 

##If you were able to finish this in less then expected your level is a little above the competition, study DSA and leetcode you will get a good job soon!
