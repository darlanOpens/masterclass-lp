# Docker Instructions - Masterclass LP

## Configuração das Variáveis de Ambiente

### 1. Configurar variáveis de ambiente
```bash
# Copie o arquivo de exemplo e configure suas variáveis
cp .env.example .env

# Edite o arquivo .env com suas configurações reais:
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
WEBHOOK_URL=https://seu-webhook.com/endpoint
FORM_ID=masterclass_bf_2024
FORM_TITLE=masterclass_black_friday
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
  -e WEBHOOK_URL=https://seu-webhook.com/endpoint \
  -e FORM_ID=masterclass_bf_2024 \
  -e FORM_TITLE=masterclass_black_friday \
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

## ⚠️ IMPORTANTE: Configuração do Webhook

### Problema Resolvido
O erro "WEBHOOK_URL não configurada" foi corrigido. A aplicação agora usa uma API route (`/api/submit-form`) que funciona tanto do lado do servidor quanto do cliente.

### Como Configurar
1. **Crie um arquivo `.env` ou `.env.local`** na raiz do projeto com:
```bash
WEBHOOK_URL=https://seu-webhook.com/endpoint
FORM_ID=masterclass_bf_2024
FORM_TITLE=masterclass_black_friday
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. **Para produção/Docker**, certifique-se de que as variáveis estão configuradas no ambiente do container.

### Estrutura do Payload Enviado:
```json
{
  "form_id": "masterclass_bf_2024",
  "form_title": "masterclass_black_friday",
  "form_data": {
    "nome": "João Silva",
    "email": "joao@email.com",
    "telefone": "(11) 98765-4321",
    "site": "[empty]",
    "redesSociais": "[empty]",
    "faturamento": "[empty]",
    "colaboradores": "[empty]",
    "Segmento": "[empty]",
    "utm_source": "[empty]",
    "utm_medium": "[empty]",
    "utm_campaign": "[empty]",
    "utm_content": "[empty]",
    "utm_term": "[empty]",
    "timestamp": "2024-10-15 19:30:45",
    "user_ip": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "page_url": "https://masterclass.com/",
    "referer_url": "[empty]",
    "post_id": null,
    "utm_parameters": "{...}"
  },
  "cookies": {
    "_ga": "GA1.1.123456789.1234567890",
    "_fbp": "fb.2.1234567890.123456789",
    "_gcl_au": "1.1.123456789.1234567890"
  }
}
```

### Funcionalidades Implementadas:
- ✅ Validação de dados (email, telefone, nome obrigatórios)
- ✅ Sanitização de inputs para prevenir XSS
- ✅ Rate limiting (5 tentativas por minuto por usuário)
- ✅ Retry automático em caso de falha
- ✅ Coleta automática de UTMs e metadados
- ✅ Tracking de cookies relevantes
- ✅ Formatação automática de telefone brasileiro
- ✅ Tratamento de erros com feedback visual
- ✅ Integração completa com GTM