# Central Port Page - Biblioteca de Componentes

Uma biblioteca completa de componentes React para criação de Landing Pages e Portfólios profissionais, com foco em design minimalista (preto e branco) e totalmente responsiva.

## 🚀 Características

- **Design Minimalista**: Paleta de cores focada em preto, branco e tons de cinza
- **Totalmente Responsivo**: Mobile-first design que funciona perfeitamente em desktop
- **Animações Suaves**: Utilizando Framer Motion para transições elegantes
- **CSS Modules**: Estilos isolados e organizados
- **Componentes Reutilizáveis**: Fácil customização e implementação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Headers/          # 4 variações de cabeçalhos
│   │   ├── Header1/      # Header minimalista com menu sticky
│   │   ├── Header2/      # Header escuro com efeitos visuais
│   │   ├── Header3/      # Header com layout vertical
│   │   └── Header4/      # Header em formato pill/cápsula
│   ├── Forms/            # 3 tipos de formulários
│   │   ├── Form1/        # Formulário de contato básico
│   │   ├── Form2/        # Formulário de orçamento completo
│   │   └── Form3/        # Newsletter simples
│   ├── Galleries/        # 3 estilos de galeria/portfólio
│   │   ├── Gallery1/     # Grid com filtros
│   │   ├── Gallery2/     # Masonry com lightbox
│   │   └── Gallery3/     # Bento box layout
│   └── Footers/          # 4 variações de rodapés
│       ├── Footer1/      # Footer completo com links
│       ├── Footer2/      # Footer minimalista com CTA
│       ├── Footer3/      # Footer criativo com grid social
│       └── Footer4/      # Footer compacto horizontal
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **CSS Modules** - Estilos isolados
- **Framer Motion** - Animações e transições
- **React Icons** - Ícones consistentes

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd central-port-page
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

## 🎨 Componentes Disponíveis

### Headers
- **Header1**: Design clean com menu hamburger responsivo
- **Header2**: Tema escuro com gradientes e efeitos
- **Header3**: Layout diferenciado com navegação vertical
- **Header4**: Estilo moderno em formato cápsula

### Formulários
- **Form1**: Contato básico (nome*, email*, mensagem)
- **Form2**: Orçamento completo (múltiplos campos, alguns opcionais)
- **Form3**: Newsletter simples (apenas email obrigatório)

### Galerias
- **Gallery1**: Grid responsivo com sistema de filtros
- **Gallery2**: Layout masonry com modal lightbox
- **Gallery3**: Bento box com estatísticas e hover effects

### Footers
- **Footer1**: Completo com informações de contato e links
- **Footer2**: Minimalista com call-to-action
- **Footer3**: Criativo com grid de redes sociais
- **Footer4**: Compacto com navegação horizontal

## 🎯 Como Usar

Cada componente é independente e pode ser importado individualmente:

```jsx
import Header1 from './components/Headers/Header1/Header1';
import Form2 from './components/Forms/Form2/Form2';
import Gallery3 from './components/Galleries/Gallery3/Gallery3';
import Footer1 from './components/Footers/Footer1/Footer1';

function MyLandingPage() {
  return (
    <div>
      <Header1 />
      <Form2 />
      <Gallery3 />
      <Footer1 />
    </div>
  );
}
```

## 🎨 Customização

Todos os estilos estão organizados em CSS Modules. Para customizar:

1. Acesse o arquivo `.module.css` do componente
2. Modifique as variáveis de cor, espaçamento ou tipografia
3. Mantenha a estrutura responsiva existente

## 📱 Responsividade

Todos os componentes seguem a abordagem mobile-first:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para acelerar a criação de Landing Pages e Portfólios profissionais**