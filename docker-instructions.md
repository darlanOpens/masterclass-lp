# Docker Instructions - Masterclass LP

## Configuração das Variáveis de Ambiente

### 1. Configurar GTM (Google Tag Manager)
```bash
# Copie o arquivo de exemplo e configure suas variáveis
cp .env.example .env

# Edite o arquivo .env com seus IDs reais:
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Construir e executar em produção

### 1. Construir a imagem Docker
```bash
docker build -t masterclass-lp .
```

### 2. Executar o container
```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX \
  -e NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX \
  masterclass-lp
```

### 3. Ou usar docker-compose (recomendado)
```bash
# Configure primeiro o arquivo .env
docker-compose up
```

## Desenvolvimento com Docker

### 1. Para desenvolvimento com hot reload
```bash
docker-compose --profile dev up masterclass-lp-dev
```

### 2. Ou construir e executar manualmente
```bash
docker build -f Dockerfile.dev -t masterclass-lp:dev .
docker run -p 3001:3000 -v $(pwd)/app:/app -v /app/node_modules masterclass-lp:dev
```

## Comandos úteis

### Parar todos os containers
```bash
docker-compose down
```

### Reconstruir imagens
```bash
docker-compose up --build
```

### Ver logs
```bash
docker-compose logs -f masterclass-lp
```

### Limpar imagens não utilizadas
```bash
docker system prune -a
```

## Acessar a aplicação

- **Produção**: http://localhost:3000
- **Desenvolvimento**: http://localhost:3001

## Estrutura Docker

- `Dockerfile` - Build otimizado para produção com multi-stage
- `Dockerfile.dev` - Build para desenvolvimento com hot reload
- `docker-compose.yml` - Orquestração dos serviços
- `app/.dockerignore` - Arquivos ignorados no build

## Eventos de Analytics Implementados

### Eventos Principais Rastreados:
- **Page Views**: Visualizações de página automáticas
- **Scroll Depth**: 25%, 50%, 75%, 100% da página
- **Time on Page**: 30s, 60s, 120s, 300s
- **Button Clicks**: Todos os CTAs com localização
- **Form Interactions**:
  - Início do formulário (primeiro foco)
  - Envio com sucesso/erro
  - Abandono de formulário
- **Section Views**: Visualização de seções importantes
- **External Links**: Cliques em links externos (WhatsApp, etc.)

### Como visualizar os eventos:
1. Configure seu GTM ID no arquivo `.env`
2. Acesse o Google Tag Manager
3. Entre no modo Preview
4. Navegue pela landing page para ver os eventos

### Eventos customizados disponíveis:
- `button_click` - Cliques em botões CTA
- `form_submit` - Envios de formulário
- `section_view` - Visualização de seções
- `scroll_depth` - Profundidade de scroll
- `time_on_page` - Tempo na página
- `external_link_click` - Links externos