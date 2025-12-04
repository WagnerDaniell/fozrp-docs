# 📚 Documentação FOZ RP 2024

Documentação oficial do servidor FOZ RP construída com Docusaurus.

## 🚀 Instalação

### Pré-requisitos
- Node.js 16.14 ou superior
- npm ou yarn

### Passos

1. **Clone ou extraia os arquivos**
```bash
cd fozrp-doc
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

O site abrirá automaticamente em `http://localhost:3000`

## 📁 Estrutura de Arquivos

```
fozrp-doc/
├── docs/
│   ├── intro.md
│   ├── regras/
│   │   ├── roleplay.md
│   │   ├── servidor.md
│   │   ├── corporacoes.md
│   │   └── faccoes.md
│   ├── economia/
│   │   ├── empregos.md
│   │   ├── armas.md
│   │   ├── imoveis.md
│   │   ├── veiculos.md
│   │   └── ilegal.md
│   ├── sistemas/
│   │   ├── policia.md
│   │   ├── faccoes-sistema.md
│   │   ├── multas.md
│   │   └── resgate.md
│   ├── progressao/
│   │   └── index.md
│   └── guias/
│       ├── inicio-rapido.md
│       └── faccoes-guia.md
├── src/
│   └── css/
│       └── custom.css
├── static/
│   └── img/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

## 🎨 Personalização

### Mudar Cores
Edite `src/css/custom.css` para alterar o tema vermelho

### Adicionar Páginas
Crie novos arquivos `.md` na pasta `docs/` e adicione ao `sidebars.js`

### Configurações
Edite `docusaurus.config.js` para:
- URL do site
- Links do Discord
- Configurações do navbar
- Footer

## 📝 Comandos Disponíveis

```bash
# Desenvolvimento
npm start

# Build para produção
npm run build

# Servir build localmente
npm run serve

# Limpar cache
npm run clear

# Deploy (GitHub Pages)
npm run deploy
```

## 🌐 Deploy

### Netlify
1. Conecte seu repositório GitHub
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Importe o projeto
2. Framework preset: Docusaurus
3. Deploy

### GitHub Pages
```bash
npm run deploy
```

## 🖼️ Adicionar Imagens

Coloque imagens na pasta `static/img/` e referencie como:
```markdown
![Descrição](/img/sua-imagem.png)
```

## ⚙️ Solução de Problemas

### Erro "Module not found"
```bash
npm run clear
npm install
```

### Porta 3000 em uso
```bash
npm start -- --port 3001
```

### Erro de versão do Node
Certifique-se de usar Node.js 16.14+
```bash
node --version
```

## 📞 Suporte

- Discord: [seu-discord]
- Issues: GitHub
- Documentação Docusaurus: https://docusaurus.io

## 📄 Licença

© 2024 FOZ RP. Todos os direitos reservados.

---

**Feito com ❤️ para a comunidade FOZ RP**