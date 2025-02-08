# Estudo do Padrão Factory

Este é um projeto pessoal com fins acadêmicos que demonstra, de forma simplificada (POC), a implementação do Design Pattern Factory usando TypeScript. O objetivo é facilitar o entendimento deste padrão de projeto através de um exemplo prático e direto.

## Sobre o Padrão Factory

O Padrão Factory é uma forma mais organizada de criar objetos no seu código. Imagine ele como uma "fábrica" que sabe exatamente qual tipo de objeto criar baseado no que você pede. Isso ajuda a manter seu código mais limpo e flexível, já que você não precisa se preocupar com os detalhes de como cada objeto é criado.

### Conceitos Principais

- **Factory**: Centraliza a lógica de criação de objetos (VehicleFactory)
- **Models**: Implementações concretas dos veículos (Car e Motorcycle)
- **Interface**: Contrato comum que todos os veículos devem seguir (Vehicle)

## Estrutura do Projeto

```plaintext
project-design-pattern-factory/
├── src/                  
│   ├── interfaces/      # Define a interface base para todos os veículos
│   │   └── Vehicle.ts
│   ├── models/          # Contém as implementações concretas dos veículos
│   │   ├── Car.ts
│   │   └── Motorcycle.ts
│   ├── factories/       # Responsável pela criação dos objetos
│   │   └── VehicleFactory.ts
│   └── index.ts         # Ponto de entrada da aplicação
│
├── tests/              
    ├── models/         # Testes das implementações dos veículos
    │   ├── Car.test.ts
    │   └── Motorcycle.test.ts
    └── factories/      # Testes da lógica de criação
        └── VehicleFactory.test.ts
```

## Testes Unitários

Este projeto utiliza Vitest como framework de testes. Os testes foram organizados para validar cada componente do padrão Factory separadamente.

### Como Executar os Testes

```bash
# Executa todos os testes
npm test

# Executa testes com relatório de cobertura
npm run coverage
```

### O que é Testado

#### Testes da Factory (VehicleFactory.test.ts)
- Verifica se a factory cria corretamente uma instância de Car
- Verifica se a factory cria corretamente uma instância de Motorcycle
- Valida o comportamento quando um tipo inválido é solicitado

#### Testes dos Models
1. Car (Car.test.ts)
   - Testa se o método start() funciona corretamente
   - Testa se o método stop() funciona corretamente
   - Verifica as mensagens corretas no console

2. Motorcycle (Motorcycle.test.ts)
   - Testa se o método start() funciona corretamente
   - Testa se o método stop() funciona corretamente
   - Verifica as mensagens corretas no console

### Cobertura de Testes
Os testes cobrem:
- Criação de objetos pela factory
- Comportamento dos métodos de cada veículo
- Tratamento de casos de erro