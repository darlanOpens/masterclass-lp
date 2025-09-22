# Docker Instructions - Masterclass LP

## Construir e executar em produção

### 1. Construir a imagem Docker
```bash
docker build -t masterclass-lp .
```

### 2. Executar o container
```bash
docker run -p 3000:3000 masterclass-lp
```

### 3. Ou usar docker-compose
```bash
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