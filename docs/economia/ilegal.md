---
sidebar_position: 7
---

# Economia Ilegal

Sistema de atividades criminosas com riscos e recompensas balanceadas.

:::danger PERIGO
Atividades ilegais possuem alto risco de prisão, multas e perda de patrimônio. Jogue com responsabilidade!
:::

## 💊 Tráfico de Drogas

### Preços de Venda:
| Droga | Preço por Unidade | Produção | Risco |
|-------|-------------------|----------|-------|
| **Baseado** | R$ 500 | 30 min | 🔴 Alto |
| **Cocaína** | R$ 800 | 1 hora | 🔴🔴 Muito Alto |

### Produção:
```lua
-- Baseado:
Sementes: R$ 500 (10 unidades)
Tempo: 30 minutos
Rendimento: 5-10 baseados
Custo produção: R$ 50/unidade

-- Cocaína:
Ingredientes: R$ 2.000 (lote)
Tempo: 1 hora
Rendimento: 10-20 unidades
Custo produção: R$ 100/unidade
```

### Pontos de Venda:
| Área | Lucro/Hora | Chance Polícia | Competição |
|------|------------|----------------|------------|
| **Centro LS** | R$ 10.000 | 40% | 🔴 Alta |
| **Periferia** | R$ 8.000 | 30% | 🟡 Média |
| **Favelas** | R$ 12.000 | 20% | 🔴 Alta |
| **Praia** | R$ 9.000 | 35% | 🟡 Média |

## 🏪 Assaltos a Lojas

### Tabela de Assaltos:
| Tipo | Lucro | Tempo | Cooldown | Policiais Mínimos |
|------|-------|-------|----------|-------------------|
| **Loja Conveniência** | R$ 5.000-10.000 | 3 min | 1 hora | 2 |
| **Posto Gasolina** | R$ 10.000-15.000 | 5 min | 1.5 horas | 2 |
| **Loja Eletrônicos** | R$ 15.000-20.000 | 8 min | 2 horas | 3 |
| **Farmácia** | R$ 8.000-12.000 | 5 min | 1.5 horas | 2 |

### Sistema de Refém:
- **Refém obrigatório:** Para negociação
- **Posição:** Deve estar visível na frente
- **Negociação:** Máximo 10 minutos
- **Sem refém:** Tiro liberado pela polícia

### Penalidades:
- **Multa se pego:** R$ 15.000
- **Prisão:** 25-45 minutos
- **Apreensão:** Armas + dinheiro
- **Falha:** 30% chance sem refém

## 🏦 Assalto a Banco

### Requisitos:
- **Mínimo 4 bandidos**
- **Mínimo 4 policiais online**
- **C4:** R$ 50.000 (consumível)
- **Veículo de fuga:** Blindado recomendado

### Fases:
1. **Entrada (2 min):** Dominar recepção
2. **Cofre (5 min):** Explodir porta
3. **Coleta (3 min):** Pegar dinheiro
4. **Fuga:** Escapar da polícia

### Recompensas:
- **Mínimo:** R$ 100.000
- **Máximo:** R$ 500.000
- **Cooldown:** 4 horas
- **Risco:** Muito alto

## 💎 Assalto a Joalheria

### Requisitos:
- **Mínimo 3 bandidos**
- **Mínimo 3 policiais online**
- **Broca Térmica:** R$ 30.000
- **Veículo rápido:** Para fuga

### Processo:
1. **Quebrar vitrine:** 2 minutos
2. **Coletar joias:** 4 minutos
3. **Fuga:** 2 minutos

### Recompensas:
- **Lucro:** R$ 200.000 - R$ 400.000
- **Cooldown:** 3 horas
- **Chance falha:** 25%

## 💵 Transporte de Valores

### Requisitos:
- **Mínimo 5 bandidos**
- **Mínimo 5 policiais online**
- **Veículo bloqueador:** Para interceptar
- **Armas pesadas:** Necessárias

### Processo:
1. **Interceptar caminhão:** Em rodovia
2. **Explodir portas:** C4 necessário
3. **Coletar malotes:** 5 minutos
4. **Escapar:** Perseguição intensa

### Recompensas:
- **Lucro:** R$ 500.000 - R$ 1.000.000
- **Cooldown:** 6 horas
- **Risco:** Extremamente alto

## 🚗 Roubo de Veículos

### Tabela de Valores:
| Categoria | Tempo Roubo | Venda Desmanche | Risco | Ferramenta |
|-----------|-------------|-----------------|-------|------------|
| **Moto** | 30s | R$ 3.000 | 🟢 Baixo | Chave Micha |
| **Popular** | 1 min | R$ 10.000 | 🟢 Baixo | Chave Micha |
| **Intermediário** | 2 min | R$ 30.000 | 🟡 Médio | Kit Eletrônico |
| **Esportivo** | 4 min | R$ 100.000 | 🔴 Alto | Hacker Device |
| **Luxo** | 6 min | R$ 250.000 | 🔴🔴 Muito Alto | Hacker Pro |

### Ferramentas:
| Item | Preço | Usos | Onde Comprar |
|------|-------|------|--------------|
| **Chave Micha** | R$ 2.000 | 5 | Mercado negro |
| **Kit Eletrônico** | R$ 5.000 | 10 | Contato facção |
| **Hacker Device** | R$ 15.000 | 20 | Contato especial |
| **Hacker Pro** | R$ 30.000 | 50 | Apenas facções grandes |

### Desmanches:
- **Desmanche Oficial (facção):** 70% do valor
- **Desmanche Clandestino:** 50% do valor
- **Venda de Peças:** 40% do valor + tempo
- **Processo:** 5-30 minutos conforme categoria

## 🔫 Contrabando

### Rotas do Paraguai:
| Item | Compra (PY) | Venda (BR) | Lucro | Risco |
|------|-------------|------------|-------|-------|
| **Celular Importado** | R$ 300 | R$ 1.200 | R$ 900 | 🟡 Médio |
| **VR** | R$ 200 | R$ 800 | R$ 600 | 🟢 Baixo |
| **Notebook** | R$ 500 | R$ 2.000 | R$ 1.500 | 🟡 Médio |
| **PS5** | R$ 800 | R$ 2.800 | R$ 2.000 | 🔴 Alto |
| **Tablet** | R$ 350 | R$ 1.200 | R$ 850 | 🟡 Médio |
| **Fone Importado** | R$ 150 | R$ 600 | R$ 450 | 🟢 Baixo |

### Sistema de Risco:
- **Blitz policial:** 25% chance
- **Apreensão:** Perda total da carga
- **Multa:** R$ 30.000 + prisão
- **Rotas alternativas:** Menor risco, mais tempo

## 🏴‍☠️ Sequestro

### Regras Estritas:
#### ✅ PERMITIDO:
- Apenas players conhecidos (min 20h interação)
- RP elaborado e justificado
- Máximo 30 minutos de sequestro
- Resgate máximo: 3x patrimônio visível

#### ❌ PROIBIDO:
- Sequestro aleatório (RDM)
- Tortura excessiva
- Matar após receber resgate
- Sequestrar mesma pessoa - 7 dias

### Tabela de Resgate:
| Vítima | Resgate Sugerido | Tempo Máximo |
|--------|------------------|--------------|
| **Cidadão Comum** | R$ 10.000-30.000 | 15 min |
| **Empresário** | R$ 50.000-150.000 | 20 min |
| **Político** | R$ 200.000-500.000 | 30 min |
| **Rival Facção** | R$ 100.000-300.000 | 25 min |

## 🎰 Jogos Ilegais

### Cassino Clandestino:
| Jogo | Aposta Mínima | Taxa Casa | Local |
|------|---------------|-----------|-------|
| **Poker** | R$ 5.000 | 10% | Cassino Abandonado |
| **Blackjack** | R$ 2.000 | 5% | Barcos |
| **Roleta** | R$ 1.000 | 15% | Mansões |
| **Slot Machines** | R$ 500 | 20% | Bares |

### Rinhas:
- **Rinha de Galo:** R$ 5.000-20.000
- **Luta Clandestina:** R$ 50.000-200.000
- **Cooldown:** 1 por dia
- **Local:** Arenas escondidas

## 💵 Lavagem de Dinheiro

### Métodos:
| Método | Taxa | Tempo | Limite | Risco |
|--------|------|-------|--------|-------|
| **Empresa Fachada** | 15% | 1 hora | R$ 500.000 | 🟡 Médio |
| **Cassino** | 20% | 30 min | R$ 200.000 | 🔴 Alto |
| **Imóveis** | 10% | 24 horas | Ilimitado | 🟢 Baixo |
| **Veículos** | 15% | 2 horas | R$ 300.000 | 🟡 Médio |

### Processo Exemplo:
```lua
-- Lavar R$ 100.000 via empresa:
Dinheiro sujo: R$ 100.000
Taxa: 15% (R$ 15.000)
Tempo: 1 hora
Dinheiro limpo: R$ 85.000
Investimento necessário: Empresa (R$ 50.000)
```

### Riscos:
- **Investigação federal:** 5% chance
- **Congelamento:** Bens bloqueados
- **Multa:** 50% do valor lavado
- **Prisão:** 60 minutos

## 📊 Economia do Crime

### Investimento Inicial (Facção Pequena):
| Item | Custo |
|------|-------|
| **Território** | R$ 500.000 |
| **Laboratório** | R$ 50.000/semana |
| **Armas (5 membros)** | R$ 200.000 |
| **Veículos** | R$ 150.000 |
| **Subornos** | R$ 100.000/mês |
| **Total Inicial** | **R$ 1.000.000** |

### Retorno Mensal Esperado:
| Atividade | Lucro Mensal | Risco |
|-----------|--------------|-------|
| **Tráfico** | R$ 500.000-1.000.000 | 🔴 Alto |
| **Roubo Veículos** | R$ 200.000-400.000 | 🟡 Médio |
| **Assaltos** | R$ 300.000-600.000 | 🔴 Alto |
| **Contrabando** | R$ 150.000-300.000 | 🟡 Médio |
| **Total** | **R$ 1.150.000-2.300.000** | |

### Break-even:
- **Facção pequena:** 2-3 meses
- **Facção média:** 4-6 meses  
- **Facção grande:** 6-12 meses

## ⚖️ Penalidades Criminais

### Crimes e Penas:
| Crime | Prisão | Multa | Apreensão |
|-------|--------|-------|-----------|
| **Posse de Droga** | 15 min | R$ 10.000 | Drogas |
| **Tráfico** | 30 min | R$ 20.000 | Tudo |
| **Roubo Veículo** | 20 min | R$ 15.000 | Veículo |
| **Assalto Loja** | 25 min | R$ 15.000 | Armas |
| **Assalto Banco** | 60 min | R$ 50.000 | Tudo |
| **Porte Ilegal** | 20 min | R$ 5.000 | Arma |
| **Homicídio** | 45 min | R$ 25.000 | Arma |
| **Sequestro** | 60 min | R$ 75.000 | Tudo |

### Fiança:
- **Valor:** 2x a multa
- **Requisitos:** Réu primário
- **Indisponível:** Crimes hediondos
- **Processo:** 5 minutos no tribunal

## 🎯 Dicas de Sobrevivência

### Para Iniciantes no Crime:
1. **Comece pequeno:** Roubo de motos
2. **Conheça rotas:** Treine fugas antes
3. **Tenha advogado:** R$ 10.000 retainer
4. **Não carregue tudo:** Divida entre membros
5. **Lave dinheiro:** Sempre que possível

### Para Facções:
1. **Diversifique:** Não dependa de uma fonte
2. **Mantenha estoque:** Armas e suprimentos
3. **Invista em território:** Segurança primeiro
4. **Corrompa estrategicamente:** Policiais chave
5. **Documente tudo:** Proteção contra reports

### Erros Comuns:
❌ **Guardar dinheiro sujo em casa**  
❌ **Vender para desconhecidos**  
❌ **Fazer crime sozinho**  
❌ **Não ter rota de fuga**  
❌ **Subestimar a polícia**

✅ **Lavar dinheiro rapidamente**  
✅ **Vender apenas para confiáveis**  
✅ **Sempre em grupo (mínimo 2)**  
✅ **Planejar antes de agir**  
✅ **Respeitar cooldowns**

---

**Próximo:** [Sistema de Multas →](/docs/economia/multas)
