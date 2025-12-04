---
sidebar_position: 4
---

# Sistema de Lojas

Tabela completa de preços dos itens disponíveis nas lojas do FOZ RP.

## 🏪 Posto de Gasolina

| Item | Preço | Descrição |
|------|-------|-----------|
| **Galão de Gasolina** | R$ 300 | 100L de combustível |
| **Água** | R$ 10 | Recupera 10% de vida |
| **Coca-Cola** | R$ 15 | Recupera 15% de vida |
| **Hot Dog** | R$ 20 | Recupera 25% de vida |
| **Donut** | R$ 12 | Recupera 10% de vida |

## 🔧 Mecânica

| Item | Preço | Descrição |
|------|-------|-----------|
| **Kit de Reparo** | R$ 500 | Repara 50% do veículo |

## 📱 Eletrônicos

| Item | Preço | Descrição |
|------|-------|-----------|
| **Celular** | R$ 1.200 | Comunicação / GPS |
| **Radinho** | R$ 400 | Escuta de frequências |

## 🧰 Utilitários

| Item | Preço | Descrição |
|------|-------|-----------|
| **Isqueiro (BIC)** | R$ 50 | Acender cigarros |
| **Pod** | R$ 80 | Vape descartável |
| **Cigarro** | R$ 30 | Pacote com 20 unidades |
| **Furadeira** | R$ 500 | Roubo de veículos/ATM |
| **Tesoura** | R$ 200 | Corte de cercas |
| **Mochila Pequena** | R$ 5.000 | +10 slots de inventário |
| **Mochila Média** | R$ 10.000 | +20 slots de inventário |
| **Mochila Grande** | R$ 20.000 | +30 slots de inventário |
| **Band-aid** | R$ 50 | Cura 5% de vida |

## 🍔 McDonalds

| Item | Preço | Recuperação |
|------|-------|-------------|
| **Café** | R$ 15 | 5% vida + energia |
| **Água** | R$ 10 | 10% vida |
| **Coca-Cola** | R$ 25 | 15% vida |
| **Água com Gás (Voss)** | R$ 30 | 20% vida |
| **Hambúrguer** | R$ 35 | 30% vida |
| **Donut** | R$ 15 | 10% vida |
| **Doritos** | R$ 25 | 15% vida |
| **Hot Dog** | R$ 20 | 25% vida |
| **Pizza** | R$ 60 | 50% vida |

## 🏪 Locais das Lojas

### Postos de Gasolina:
- **LS:** 8 locais espalhados
- **SF:** 4 locais principais
- **LV:** 3 locais no deserto

### Lojas 24h:
- **Conveniência:** 12 lojas no total
- **Farmácias:** 6 lojas (band-aid, curativos)
- **Eletrônicos:** 3 lojas especializadas

### Restaurantes:
- **McDonalds:** 5 filiais
- **Burguer Shot:** 4 filiais
- **Pizza:** 3 restaurantes

## 💰 Dicas de Economia

### Compras Inteligentes:
1. **Água vs Coca-Cola:**
   - Água: R$ 10 → 10% vida (R$ 1 por 1%)
   - Coca: R$ 15 → 15% vida (R$ 1 por 1%)
   - **Melhor custo-benefício:** Igual

2. **Comida Completa:**
   - Pizza: R$ 60 → 50% vida (R$ 1.2 por 1%)
   - Hambúrguer + Coca: R$ 60 → 45% vida (R$ 1.33 por 1%)
   - **Mais eficiente:** Pizza

3. **Mochilas:**
   - Pequena: R$ 5.000 → R$ 500 por slot
   - Média: R$ 10.000 → R$ 500 por slot
   - Grande: R$ 20.000 → R$ 667 por slot
   - **Melhor custo:** Pequena/Média

## 📦 Estoque e Reposição

### Regras de Estoque:
- **Lojas NPC:** Estoque infinito
- **Lojas Player-owned:** Estoque limitado
- **Reposição:** Automática a cada 24h
- **Descontos:** Eventos semanais (10-20% off)

### Itens Restritos:
- **Furadeira:** Venda controlada
- **Tesoura:** Registro obrigatório
- **Kits de Reparo:** Limite 3 por compra

## 🎯 Necessidades Básicas

### Kit Sobrevivência (R$ 1.000):
```lua
Água: 5x = R$ 50
Band-aid: 5x = R$ 250
Cigarro: 1x = R$ 30
Isqueiro: 1x = R$ 50
Celular: 1x = R$ 1.200 (opcional)
Total: R$ 380 (sem celular)
```

### Kit Trabalho (R$ 3.000):
```lua
Kit Reparo: 2x = R$ 1.000
Água: 10x = R$ 100
Comida: R$ 200
Gasolina: 100L = R$ 300
Total: R$ 1.600
```

### Kit Aventura (R$ 10.000+):
```lua
Mochila Média: R$ 10.000
Furadeira: R$ 500
Tesoura: R$ 200
Kit Reparo: 5x = R$ 2.500
Suprimentos: R$ 1.000
Total: R$ 14.200
```

**Próximo:** [Sistema de Veículos →](veiculos)
