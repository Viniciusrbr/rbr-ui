# 🎨 RBR-UI

Uma biblioteca de componentes UI construída com React, TypeScript e Tailwind CSS, documentada com Storybook.

## 📚 Sobre o Projeto

Este é um projeto de estudos desenvolvido com o objetivo de aprender a criar uma biblioteca de componentes reutilizáveis (UI Kit) com documentação interativa usando Storybook.

## ✨ Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Storybook 10** - Ferramenta para documentação de componentes
- **Radix UI** - Primitivos de UI acessíveis e sem estilo
- **Class Variance Authority** - Gerenciamento de variantes de componentes
- **Tsup** - Bundler para bibliotecas TypeScript
- **Lucide React** - Ícones modernos

## 🧩 Componentes

| Componente | Descrição |
|------------|-----------|
| `Button` | Botão com múltiplas variantes (default, destructive, outline, secondary, ghost, link) e tamanhos |
| `Input` | Campo de entrada de texto estilizado |
| `Avatar` | Componente de avatar com imagem e fallback |
| `DropdownMenu` | Menu suspenso acessível |

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Acesse a pasta do projeto
cd ui-kit-storybook

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Iniciar o Storybook em modo de desenvolvimento
npm run dev

# Build da biblioteca
npm run build

# Build do Storybook
npm run build-storybook

# Executar o linter
npm run lint
```

## 📦 Instalação como Dependência

```bash
npm install rbr-ui
```

### Uso

```tsx
import { Button, Input, Avatar } from 'rbr-ui'
import 'rbr-ui/styles.css'

function App() {
  return (
    <div>
      <Button variant="default">Clique aqui</Button>
      <Button variant="destructive">Deletar</Button>
      <Button variant="outline">Outline</Button>
      
      <Input placeholder="Digite algo..." />
      
      <Avatar>
        <AvatarImage src="https://github.com/username.png" />
        <AvatarFallback>UN</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

## 🎯 Variantes do Button

| Variante | Descrição |
|----------|-----------|
| `default` | Estilo primário padrão |
| `destructive` | Para ações destrutivas |
| `outline` | Com borda e fundo transparente |
| `secondary` | Estilo secundário |
| `ghost` | Sem fundo, apenas hover |
| `link` | Estilo de link com sublinhado |

### Tamanhos

| Tamanho | Descrição |
|---------|-----------|
| `default` | Tamanho padrão (h-9) |
| `sm` | Pequeno (h-8) |
| `lg` | Grande (h-10) |
| `icon` | Quadrado para ícones (size-9) |
| `icon-sm` | Ícone pequeno (size-8) |
| `icon-lg` | Ícone grande (size-10) |

## 📁 Estrutura do Projeto

```
src/
├── components/       # Componentes da biblioteca
│   ├── avatar.tsx
│   ├── button.tsx
│   ├── dropdown-menu.tsx
│   └── input.tsx
├── lib/
│   └── utils.ts      # Utilitários (cn function)
├── stories/          # Stories do Storybook
│   ├── avatar.stories.tsx
│   ├── button.stories.ts
│   ├── dropdownMenu.stories.tsx
│   └── input.stories.ts
├── index.css         # Estilos globais
└── index.ts          # Exports da biblioteca
```

## 🎓 Aprendizados

- Criação de bibliotecas de componentes com React e TypeScript
- Configuração e uso do Storybook para documentação
- Configuração de build com Tsup
- Publicação de pacotes npm

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo.

---
