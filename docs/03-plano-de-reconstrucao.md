# Plano de reconstrução da DrinkDrips

## Resultado a alcançar

Lançar uma plataforma de eventos confiável, simples e útil para organizadores, participantes e parceiros — começando sem dependência de carteira ou token. Recursos on-chain serão avaliados como uma capacidade opcional posterior, nunca como pré-requisito do produto.

O plano é deliberadamente dividido em etapas com **gates**: não avançamos porque o código existe, mas porque há evidência de valor, qualidade e segurança.

## Trilha de execução

| Marco | Entrega | Resultado verificável | Dependência |
| --- | --- | --- | --- |
| M0 — Baseline | Repositório limpo, documentação, convenções e CI inicial | build, lint e testes mínimos executam em CI; estado atual preservado | Nenhuma |
| M1 — Descoberta | Brief, pesquisa, personas, jornadas e métrica norte | segmento e problema prioritários aprovados com evidências | M0 |
| M2 — Fundação de marca | Arquitetura da informação, conteúdo, design system e novo site público | páginas acessíveis, indexáveis, rápidas e com políticas/publicação de suporte | M1 |
| M3 — MVP de eventos | Fluxos de organizador e participante, sem carteira | evento piloto criado, publicado, adquirido/confirmado e acompanhado ponta a ponta | M2 |
| M4 — Operação de rede | Fornecedores, check-in, benefícios e ferramentas operacionais | pilotos operados com métricas de qualidade e processos de exceção | M3 |
| M5 — Readiness on-chain | Decisão fundamentada, contratos e integração em testnet | revisão jurídica, fontes verificadas, testes, auditoria e UX de risco aprovadas | M4 |
| M6 — Lançamento controlado | Funções on-chain opcionais e limitadas | monitorização, suporte, limites e resposta a incidentes em operação | M5 |

## Próximas quatro pull requests

### PR 1 — Estratégia e baseline documental

Inclui os documentos de estado atual, tese, carta de reconstrução e este plano. Não modifica a aplicação atual.

**Aceite:** revisão do fundador; decisão explícita sobre o segmento do primeiro piloto; documentação publicada no repositório.

### PR 2 — Fundamentos de engenharia

Configura a nova aplicação paralela ao protótipo legado, com TypeScript estrito, lint, formatter, testes, CI, variáveis de ambiente exemplificadas e regras de contribuição. Não migra ainda a interface nem ativa integrações financeiras.

**Aceite:** clone limpo consegue instalar, validar, testar e gerar build; cada comando está documentado; CI bloqueia regressões.

### PR 3 — Arquitetura de informação e design system

Entrega a navegação, tokens visuais, componentes acessíveis, páginas institucionais e conteúdo essencial (proposta, como funciona, segurança, contacto, termos e privacidade). O conteúdo antigo é migrado apenas se estiver validado e atualizado.

**Aceite:** revisão de conteúdo, teclado/leitor de ecrã/contraste/mobile, metadata/SEO e medição de performance.

### PR 4 — Protótipo de evento e validação

Entrega o primeiro fluxo demonstrável para o segmento escolhido: descoberta de evento, detalhe, RSVP/checkout simulado, confirmação e backoffice mínimo de organizador. O pagamento real só entra com requisitos operacionais e legais definidos.

**Aceite:** cinco utilizadores-alvo completam os fluxos críticos; eventos e falhas são instrumentados; feedback e decisões registados.

## Plano de trabalho do M0 ao M1

1. Confirmar o primeiro segmento: por exemplo, organizadores de eventos independentes em Portugal, festivais, bares/clubes ou eventos corporativos. Não construir até escolher um único ponto de partida.
2. Formular as hipóteses de problema, solução e receita; definir o que invalida cada uma.
3. Realizar entrevistas com organizadores, participantes e fornecedores; separar citações/evidência de opiniões internas.
4. Mapear a jornada completa, incluindo suporte, cancelamento/reembolso, check-in, privacidade e pagamentos.
5. Definir a métrica norte e métricas de proteção: conversão, presença, recorrência, satisfação, reembolsos, incidentes e suporte.
6. Criar backlog priorizado por impacto, confiança, esforço e risco; manter explicitamente um não-escopo.
7. Iniciar a nova aplicação sem apagar o protótipo. Qualquer migração ou remoção do legado requer PR própria e plano de rollback.

## Regra de decisão para funcionalidades cripto

Cada funcionalidade deve responder, por escrito, antes de entrar no backlog de implementação:

1. Que problema do utilizador resolve melhor do que uma solução convencional?
2. Para quem a carteira é opcional e como a experiência funciona sem ela?
3. Que dados nunca podem ir para a cadeia?
4. Qual a jurisdição, classificação e aprovação jurídica aplicável?
5. Quais são os riscos financeiros e operacionais comunicados ao utilizador?
6. Onde estão fontes verificadas, testes, auditoria independente, owner/admin, mecanismo de pausa e plano de incidente?

Uma resposta incompleta mantém a funcionalidade fora de produção.

## Governança Git e pull requests

### Branches

- `main`: sempre estável e pronta para deploy; merge só por PR aprovada.
- `codex/<tema-curto>`: branch de trabalho para cada unidade de entrega. Ex.: `codex/fundacao-engenharia`.
- Não fazer trabalho funcional diretamente em `main`.

### Commits

Usar Conventional Commits, pequenos e coerentes. Exemplos:

```text
docs: define plano de reconstrução
chore: configura verificação contínua
feat(events): cria fluxo de publicação de evento
fix(wallet): bloqueia transação na rede incorreta
test(checkout): cobre confirmação e cancelamento
```

Cada commit deve compilar/validar quando aplicável, não misturar formatação com mudança funcional e referenciar a decisão/documento relevante no corpo quando a alteração for estrutural.

### Pull requests

Toda PR deve conter:

- objetivo, escopo e não-escopo;
- ligação a issue/decisão ou explicação de por que ela não existe;
- como testar e resultado dos checks;
- impacto em segurança, privacidade, acessibilidade e performance;
- screenshots/vídeo para mudança visual;
- plano de rollout e rollback para mudanças de risco; e
- atualização de documentação quando alterar produto, arquitetura ou operação.

PRs que envolvam contratos, pagamentos, identidade, dados sensíveis ou permissões exigem revisão específica de segurança antes de merge. Nunca incluir chaves, seeds, tokens de acesso ou dados de produção.

### Issues e decisões

- Criar issue antes de trabalho superior a uma PR pequena; usar labels `product`, `design`, `engineering`, `security`, `legal`, `research` e `blocked`.
- Registar decisões difíceis em ADRs (`docs/adr/NNNN-titulo.md`), com contexto, decisão, alternativas e consequências.
- Manter um changelog de produto para alterações que afetam utilizadores.

## Definição de pronto

Uma funcionalidade está pronta somente quando atende ao critério de produto, tem estados de sucesso/erro/carregamento/vazio, é acessível, tem telemetria proporcional, está coberta por testes adequados, passou CI e tem documentação operacional. Se movimentar dinheiro, credenciais ou dados sensíveis, também requer revisão de segurança e plano de incidente.

## Decisão que desbloqueia a PR 2

Escolher o segmento do primeiro piloto e nomear o responsável de produto que aprova escopo. Até essa decisão, a única implementação segura é a fundação de engenharia e o site institucional, sem fluxo transacional.

