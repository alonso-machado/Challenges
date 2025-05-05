Para que serve um Bean?
É um objeto que tem sua instanciação e configuração e todo o ciclo de vida gerenciados pelo Spring.

Oque são as Annotations em Spring Boot?
As anotações em Spring Boot simplificam o desenvolvimento ao permitir que você configure e gerencie componentes de forma declarativa Ex: @Configuration @Component @Bean ...

Quais são as principais Annotations na camada Controllers?
@Controller, @RestController, @RequestMapping, @GetMapping, @Postmapping, @DeleteMapping, @PutMapping, @PatchMapping, @RequestParam, @PathVariable e @RequestBody e @Valid

Quais são as principais Annotations em Repository?
@Repository
@Query para definir as consultas manualmente e @Modifying caso o "@Query" for alterar o BD.

Quais são as principais Annotations em Services? Por favor explique os seus usos?
@Service para anotar que o @Component é uma Service (melhorando a semântica)
@Transactional para atomicidade do acesso ao BD
@Autowired para injeção de dependências
@Value caso seja necessário alguma configuração direto na servisse de arquivos de configuração .properties ou .yaml
@Scheduled para caso seja necessário execuções agendadas/programadas em um horário específico.

Quantos e quais são os tipos de injeção de dependências suportados no Spring Boot? Qual é a mais recomendada? Explique os usos.
São 3 tipos, dividos em:
Injeção por Construtor  = Pelo construtor e é a mais recomendada pois facilita os testes.
Injeção por Campo (@Autowired) = Automaticamente o Spring injeta a dependência.
Injeção por Setter (Menos usado/conhecido) = Usando um Setter normalmente é utilizado quando as dependências são opcionais

Quais são as principais Annotations na camada Model (Entidades) em SQL e NoSQL?
Annotations do jakarta.validation (@NotNull, @Size, @Min, @NotBlank, @NotEmpty, @Positive, ...)
SQL = @Entity, @Table, @Id, @GeneratedValue, @Column, @Transient, @JoinColumn, @ManyToOne, @ManyToMany, @OneToMany, @OneToOne com (fetch = FetchType.EAGER) e  (fetch = FetchType.LAZY).
NoSQL = @Document, @Field, @Id (Usualmente String ou UUID)

Qual a diferença entre das Validations de @NotNull, @NotBlank, @NotEmpty?
NotNull = Não nulo
NotEmpty = Não nulo e pelo menos um caractere - pode ser usado pra Listas e Collections também onde vai exigir um elemento na lista.
NotBlank = Não nulo e não permite somente espaços em Strings

Como implementar um Custom Validator?
Criar uma @interface MyConstraint com @Constraint(validatedBy = CustomValidator.class) @Retention
CustomValidator implements ConstraintValidator<MyConstraint,String> e @Override isValid.
Usar a nova Annotation @CustomValidator

Como funciona o Tratamento de Exceções com Advices no Spring Boot?
@ControllerAdvice
@ExceptionHandler(NomeException.class)

O que é e Como resolver o problema N+1 do hibernate com Spring Boot?
O Problema N+1 ocorre quando uma consulta principal resulta em mais N consultas no BD para carregar dados de outras entidades relacionadas afetando muito a performance.
Como resolver = @EntityGraph ou @Query manual com JOIN FETCH ou raramente tentar (fetch = FetchType.LAZY)
