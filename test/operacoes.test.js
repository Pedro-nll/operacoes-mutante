const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

  // === TESTES ADICIONAIS PARA MATAR MUTANTES SOBREVIVENTES ===

  // Testes para comparações (casos FALSE)
  describe('Testes adicionais para comparações', () => {
    test('deve retornar false quando não é maior', () => { expect(isMaiorQue(5, 10)).toBe(false); });
    test('deve retornar false quando não é menor', () => { expect(isMenorQue(10, 5)).toBe(false); });
    test('deve retornar false quando não é igual', () => { expect(isEqual(7, 8)).toBe(false); });
    test('deve retornar false para número ímpar 8', () => { expect(isPar(8)).toBe(true); expect(isImpar(8)).toBe(false); });
    test('deve retornar false para número par 9', () => { expect(isPar(9)).toBe(false); expect(isImpar(9)).toBe(true); });
    test('deve retornar false para número ímpar 0', () => { expect(isPar(0)).toBe(true); expect(isImpar(0)).toBe(false); });
  });

  // Testes para funções que lançam erros (verificar mensagem)
  describe('Testes para mensagens de erro', () => {
    test('divisão por zero deve conter mensagem correta', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('raiz negativa deve conter mensagem específica', () => {
      expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
    test('fatorial negativo deve conter mensagem específica', () => {
      expect(() => fatorial(-5)).toThrow('Fatorial não é definido para números negativos.');
    });
    test('máximo de array vazio deve lançar erro', () => {
      expect(() => maximoArray([])).toThrow();
    });
    test('mínimo de array vazio deve lançar erro', () => {
      expect(() => minimoArray([])).toThrow();
    });
    test('mediana de array vazio deve lançar erro', () => {
      expect(() => medianaArray([])).toThrow();
    });
    test('inverso de zero deve lançar erro', () => {
      expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });
  });

  // Testes para casos limite com fatorial
  describe('Testes para fatorial - casos limite', () => {
    test('fatorial de 0 deve retornar 1', () => { expect(fatorial(0)).toBe(1); });
    test('fatorial de 1 deve retornar 1', () => { expect(fatorial(1)).toBe(1); });
    test('fatorial de 2 deve retornar 2', () => { expect(fatorial(2)).toBe(2); });
    test('fatorial de 5 deve retornar 120', () => { expect(fatorial(5)).toBe(120); });
  });

  // Testes para isPrimo - casos limite
  describe('Testes para isPrimo - casos limite', () => {
    test('0 não é primo', () => { expect(isPrimo(0)).toBe(false); });
    test('1 não é primo', () => { expect(isPrimo(1)).toBe(false); });
    test('2 é primo', () => { expect(isPrimo(2)).toBe(true); });
    test('3 é primo', () => { expect(isPrimo(3)).toBe(true); });
    test('4 não é primo', () => { expect(isPrimo(4)).toBe(false); });
    test('5 é primo', () => { expect(isPrimo(5)).toBe(true); });
    test('10 não é primo', () => { expect(isPrimo(10)).toBe(false); });
    test('11 é primo', () => { expect(isPrimo(11)).toBe(true); });
  });

  // Testes para isDivisivel
  describe('Testes para isDivisivel', () => {
    test('12 é divisível por 3', () => { expect(isDivisivel(12, 3)).toBe(true); });
    test('12 não é divisível por 5', () => { expect(isDivisivel(12, 5)).toBe(false); });
    test('10 é divisível por 2', () => { expect(isDivisivel(10, 2)).toBe(true); });
    test('7 não é divisível por 2', () => { expect(isDivisivel(7, 2)).toBe(false); });
  });

  // Testes para raizQuadrada com casos limite
  describe('Testes para raizQuadrada', () => {
    test('raiz de 0 é 0', () => { expect(raizQuadrada(0)).toBe(0); });
    test('raiz de 1 é 1', () => { expect(raizQuadrada(1)).toBe(1); });
    test('raiz de 4 é 2', () => { expect(raizQuadrada(4)).toBe(2); });
    test('raiz de 25 é 5', () => { expect(raizQuadrada(25)).toBe(5); });
  });

  // Testes para mediaArray com casos limite
  describe('Testes para mediaArray', () => {
    test('média de array vazio retorna 0', () => { expect(mediaArray([])).toBe(0); });
    test('média de um elemento', () => { expect(mediaArray([5])).toBe(5); });
    test('média de dois elementos', () => { expect(mediaArray([2, 4])).toBe(3); });
  });

  // Testes para operações de porcentagem
  describe('Testes para operações de porcentagem', () => {
    test('100% de 200 é 200', () => { expect(calcularPorcentagem(100, 200)).toBe(200); });
    test('0% de 200 é 0', () => { expect(calcularPorcentagem(0, 200)).toBe(0); });
    test('25% de 100 é 25', () => { expect(calcularPorcentagem(25, 100)).toBe(25); });
  });

  // Testes para clamp
  describe('Testes para clamp', () => {
    test('clamp com valor menor que mínimo', () => { expect(clamp(2, 5, 10)).toBe(5); });
    test('clamp com valor maior que máximo', () => { expect(clamp(15, 5, 10)).toBe(10); });
    test('clamp com valor igual ao mínimo', () => { expect(clamp(5, 5, 10)).toBe(5); });
    test('clamp com valor igual ao máximo', () => { expect(clamp(10, 5, 10)).toBe(10); });
  });

  // Testes para medianaArray com casos especiais
  describe('Testes para medianaArray - casos especiais', () => {
    test('mediana de um elemento', () => { expect(medianaArray([5])).toBe(5); });
    test('mediana de dois elementos', () => { expect(medianaArray([2, 4])).toBe(3); });
    test('mediana de três elementos (ordem diferente)', () => { expect(medianaArray([3, 1, 2])).toBe(2); });
    test('mediana de quatro elementos', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
    test('mediana com números negativos', () => { expect(medianaArray([-1, 0, 1])).toBe(0); });
  });

  // Testes para operações aritméticas com variações
  describe('Testes para operações aritméticas variadas', () => {
    test('soma com números negativos', () => { expect(soma(-5, 3)).toBe(-2); });
    test('subtração que resulta em negativo', () => { expect(subtracao(3, 5)).toBe(-2); });
    test('multiplicação com zero', () => { expect(multiplicacao(5, 0)).toBe(0); });
    test('multiplicação com números negativos', () => { expect(multiplicacao(-3, 4)).toBe(-12); });
    test('potência com expoente 0', () => { expect(potencia(5, 0)).toBe(1); });
    test('potência com expoente 1', () => { expect(potencia(5, 1)).toBe(5); });
    test('resto de divisão simples', () => { expect(restoDivisao(7, 3)).toBe(1); });
    test('resto de divisão com resto 0', () => { expect(restoDivisao(10, 5)).toBe(0); });
  });

  // Testes para conversões de temperatura
  describe('Testes para conversão de temperatura', () => {
    test('0 Celsius = 32 Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
    test('100 Celsius = 212 Fahrenheit', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
    test('-40 Celsius = -40 Fahrenheit', () => { expect(celsiusParaFahrenheit(-40)).toBe(-40); });
    test('32 Fahrenheit = 0 Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
    test('212 Fahrenheit = 100 Celsius', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  });

  // Testes para MDC e MMC
  describe('Testes para MDC e MMC', () => {
    test('MDC de números iguais', () => { expect(mdc(10, 10)).toBe(10); });
    test('MDC de 1 e qualquer número', () => { expect(mdc(1, 100)).toBe(1); });
    test('MDC de 12 e 8', () => { expect(mdc(12, 8)).toBe(4); });
    test('MMC de 4 e 6', () => { expect(mmc(4, 6)).toBe(12); });
    test('MMC de números iguais', () => { expect(mmc(10, 10)).toBe(10); });
  });

  // Testes para funções de sinal
  describe('Testes para funções de sinal', () => {
    test('inverter sinal positivo', () => { expect(inverterSinal(5)).toBe(-5); });
    test('inverter sinal negativo', () => { expect(inverterSinal(-5)).toBe(5); });
    test('dobro de número negativo', () => { expect(dobro(-5)).toBe(-10); });
    test('triplo de número negativo', () => { expect(triplo(-5)).toBe(-15); });
    test('metade de número negativo', () => { expect(metade(-10)).toBe(-5); });
  });

  // Testes para múltiplos casos de comparação
  describe('Testes rigorosos de comparação', () => {
    test('isMaiorQue: 10 > 5', () => { expect(isMaiorQue(10, 5)).toBe(true); });
    test('isMaiorQue: 5 > 10', () => { expect(isMaiorQue(5, 10)).toBe(false); });
    test('isMaiorQue: 5 > 5', () => { expect(isMaiorQue(5, 5)).toBe(false); });
    test('isMenorQue: 5 < 10', () => { expect(isMenorQue(5, 10)).toBe(true); });
    test('isMenorQue: 10 < 5', () => { expect(isMenorQue(10, 5)).toBe(false); });
    test('isMenorQue: 5 < 5', () => { expect(isMenorQue(5, 5)).toBe(false); });
    test('isEqual: valores iguais', () => { expect(isEqual(42, 42)).toBe(true); });
    test('isEqual: valores diferentes', () => { expect(isEqual(42, 43)).toBe(false); });
    test('isEqual: zero igual a zero', () => { expect(isEqual(0, 0)).toBe(true); });
  });

  // Testes para produtoArray
  describe('Testes para produtoArray', () => {
    test('produto de array vazio retorna 1', () => { expect(produtoArray([])).toBe(1); });
    test('produto com um elemento', () => { expect(produtoArray([5])).toBe(5); });
    test('produto com zero', () => { expect(produtoArray([2, 0, 3])).toBe(0); });
    test('produto com números negativos', () => { expect(produtoArray([2, -3, 4])).toBe(-24); });
  });

  // Testes para Fibonacci
  describe('Testes para Fibonacci', () => {
    test('fibonacci(0)', () => { expect(fibonacci(0)).toBe(0); });
    test('fibonacci(1)', () => { expect(fibonacci(1)).toBe(1); });
    test('fibonacci(2)', () => { expect(fibonacci(2)).toBe(1); });
    test('fibonacci(3)', () => { expect(fibonacci(3)).toBe(2); });
    test('fibonacci(4)', () => { expect(fibonacci(4)).toBe(3); });
    test('fibonacci(5)', () => { expect(fibonacci(5)).toBe(5); });
    test('fibonacci(6)', () => { expect(fibonacci(6)).toBe(8); });
    });

    // Testes extremamente específicos para matar mutantes finais
    describe('Testes críticos para mutantes de fatorial e operadores', () => {
      // Testes para matar mutantes de fatorial relacionados a || vs &&
      test('fatorial não retorna valor de multiplicação para 0 ou 1', () => {
        expect(fatorial(0)).toBe(1);
        expect(fatorial(1)).toBe(1);
        expect(fatorial(2)).toBe(2); // diferente de 1
        expect(fatorial(3)).not.toBe(1);
      });
    
      test('fatorial testa ambas condições independentemente', () => {
        // Se fosse && ao invés de ||, isso falharia
        expect(fatorial(0)).toBe(1);
        expect(fatorial(2)).not.toBe(1); // n===1 é false, n===0 é false, mas ainda retorna 1 para 0
      });

      // Testes para operadores de comparação em clamp
      test('clamp retorna exatamente min quando valor é min', () => {
        const result = clamp(5, 5, 10);
        expect(result).toStrictEqual(5);
        expect(result).toBe(5);
      });
    
      test('clamp retorna exatamente max quando valor é max', () => {
        const result = clamp(10, 5, 10);
        expect(result).toStrictEqual(10);
        expect(result).toBe(10);
      });
    
      test('clamp com valor abaixo de min retorna min', () => {
        expect(clamp(4, 5, 10)).toBe(5);
        expect(clamp(4.9, 5, 10)).toBe(5);
      });
    
      test('clamp com valor acima de max retorna max', () => {
        expect(clamp(11, 5, 10)).toBe(10);
        expect(clamp(10.1, 5, 10)).toBe(10);
      });

      // Testes para produtoArray com array vazio
      test('produtoArray retorna exatamente 1 para array vazio', () => {
        expect(produtoArray([])).toStrictEqual(1);
        expect(produtoArray([])).toBe(1);
        expect(produtoArray([])===1).toBe(true);
      });

      // Testes verificando mensagens de erro exatas
      test('maximoArray error message é exata', () => {
        try {
          maximoArray([]);
          fail('Deveria ter lançado erro');
        } catch (e) {
          expect(e.message).toContain('vazio');
          expect(e.message).toContain('máximo');
        }
      });
    
      test('minimoArray error message é exata', () => {
        try {
          minimoArray([]);
          fail('Deveria ter lançado erro');
        } catch (e) {
          expect(e.message).toContain('vazio');
          expect(e.message).toContain('mínimo');
        }
      });
    
      test('medianaArray error message é exata', () => {
        try {
          medianaArray([]);
          fail('Deveria ter lançado erro');
        } catch (e) {
          expect(e.message).toContain('vazio');
          expect(e.message).toContain('mediana');
        }
      });
    });

    // Testes adicionais para cobrir mais ramificações
    describe('Testes para ramificações críticas', () => {
      test('fatorial 0 via base case', () => { 
        // Testa a condição n === 0 diretamente
        expect(fatorial(0)).toBe(1); 
        expect(fatorial(0)).not.toBe(0);
      });
    
      test('fatorial 1 via base case', () => { 
        // Testa a condição n === 1 diretamente
        expect(fatorial(1)).toBe(1); 
        expect(fatorial(1)).not.toBe(0);
      });
    
      test('operadores de clamp estão corretos com múltiplos valores', () => {
        // Testar < e > não >= ou <=
        expect(clamp(5, 5, 10)).toBe(5);      // valor === min
        expect(clamp(4, 5, 10)).toBe(5);      // valor < min
        expect(clamp(10, 5, 10)).toBe(10);    // valor === max
        expect(clamp(11, 5, 10)).toBe(10);    // valor > max
        expect(clamp(7, 5, 10)).toBe(7);      // valor dentro do range
      });
    });

    // Testes para eliminar os últimos 7 mutantes
    describe('Testes finais para eliminar mutantes críticos', () => {
      // Fatorial: testar que ambas as condições 0 E 1 retornam 1
      test('fatorial(0) retorna 1 e não outro valor', () => {
        const result = fatorial(0);
        expect(result).toBe(1);
        expect(result).toBe(fatorial(1));
        expect(fatorial(0) === fatorial(1)).toBe(true);
      });

      test('fatorial condição || funciona: 0 ou 1 retorna 1', () => {
        // Se fosse && só funcionaria para números que são ambos 0 e 1 (impossível)
        expect(fatorial(0) === 1).toBe(true);
        expect(fatorial(1) === 1).toBe(true);
        expect(fatorial(2) !== 1).toBe(true);
      });

      test('fatorial base case não consigo quebrar com divisão de casos', () => {
        // Testa a lógica específica
        const n0 = fatorial(0);
        const n1 = fatorial(1);
        const n2 = fatorial(2);
        expect(n0).toBe(1);
        expect(n1).toBe(1);
        expect(n2).toBe(2);
        expect(n0).toEqual(n1);
        expect(n2).not.toEqual(n0);
      });

      // ProdutoArray: testar array vazio múltiplas vezes
      test('produtoArray([]) é invariavelmente 1', () => {
        expect(produtoArray([]) === produtoArray([])).toBe(true);
        expect(produtoArray([])).toBe(1);
        expect(produtoArray([]).valueOf()).toBe(1);
      });

      test('produtoArray empty vs [1]', () => {
        expect(produtoArray([])).toBe(produtoArray([1]));
        expect(produtoArray([])).toBe(1);
        expect(produtoArray([1])).toBe(1);
      });

      // Clamp: testes muito específicos dos operadores
      test('clamp operador < vs <=: min check', () => {
        // valor < min deveria retornar min
        // Se fosse <=, valores === min retornariam de outro jeito
        const testMin = 5;
        expect(clamp(testMin - 0.0001, testMin, 10)).toBe(testMin);
        expect(clamp(testMin, testMin, 10)).toBe(testMin);
        expect(clamp(testMin + 0.0001, testMin, 10)).toBe(testMin + 0.0001);
      });

      test('clamp operador > vs >=: max check', () => {
        // valor > max deveria retornar max
        // Se fosse >=, valores === max retornariam de outro jeito
        const testMax = 10;
        expect(clamp(testMax + 0.0001, 5, testMax)).toBe(testMax);
        expect(clamp(testMax, 5, testMax)).toBe(testMax);
        expect(clamp(testMax - 0.0001, 5, testMax)).toBe(testMax - 0.0001);
      });

      test('clamp com valores fracionários exatos', () => {
        expect(clamp(5.5, 5, 10)).toBe(5.5);
        expect(clamp(4.5, 5, 10)).toBe(5);
        expect(clamp(10.5, 5, 10)).toBe(10);
        expect(clamp(9.5, 5, 10)).toBe(9.5);
      });
    });

    // Testes muito específicos para matar mutantes de fatorial
    describe('Testes de fatorial - lógica OR', () => {
      // Esses testes matam mutantes de || vs && na condição de fatorial
      test('fatorial(0) retorna 1 (não 0)', () => { expect(fatorial(0)).not.toBe(2); });
      test('fatorial(1) retorna 1 (não 2)', () => { expect(fatorial(1)).not.toBe(2); });
      test('fatorial(0) é 1 e fatorial(2) não é 1', () => {
        expect(fatorial(0)).toBe(1);
        expect(fatorial(2)).not.toBe(1);
      });
      test('fatorial deve diferenciar 0, 1 e outros', () => {
        expect(fatorial(0)).toBe(1);
        expect(fatorial(1)).toBe(1);
        expect(fatorial(2)).toBe(2);
        expect(fatorial(3)).toBe(6);
      });
    });

    // Testes específicos para clamp - operadores de comparação
    describe('Testes rigorosos para clamp - < vs <=', () => {
      // Esses testes matam mutantes de < vs <= e > vs >=
      test('clamp(5, 5, 10) retorna 5 não 6', () => { expect(clamp(5, 5, 10)).toBe(5); });
      test('clamp(10, 5, 10) retorna 10 não 9', () => { expect(clamp(10, 5, 10)).toBe(10); });
      test('clamp(4, 5, 10) retorna 5 não 4', () => { expect(clamp(4, 5, 10)).toBe(5); });
      test('clamp(11, 5, 10) retorna 10 não 11', () => { expect(clamp(11, 5, 10)).toBe(10); });
      test('clamp(7.5, 5, 10) retorna 7.5', () => { expect(clamp(7.5, 5, 10)).toBe(7.5); });
      // Testar valores muito próximos do limite
      test('clamp(5.0001, 5, 10) retorna 5.0001', () => { expect(clamp(5.0001, 5, 10)).toBe(5.0001); });
      test('clamp(4.9999, 5, 10) retorna 5', () => { expect(clamp(4.9999, 5, 10)).toBe(5); });
      test('clamp(9.9999, 5, 10) retorna 9.9999', () => { expect(clamp(9.9999, 5, 10)).toBe(9.9999); });
      test('clamp(10.0001, 5, 10) retorna 10', () => { expect(clamp(10.0001, 5, 10)).toBe(10); });
    });

    // Testes para produtoArray com array vazio
    describe('Testes para produtoArray - caso vazio', () => {
      test('produtoArray([]) deve retornar 1 não 0', () => { 
        expect(produtoArray([])).toBe(1);
        expect(produtoArray([])).not.toBe(0);
      });
      test('produtoArray([1]) retorna 1', () => { expect(produtoArray([1])).toBe(1); });
      test('produtoArray([1, 1]) retorna 1', () => { expect(produtoArray([1, 1])).toBe(1); });
  });
describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});