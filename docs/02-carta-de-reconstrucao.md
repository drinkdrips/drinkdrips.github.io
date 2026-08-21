# DrinkDrips — carta de reconstrução 2026

## Objetivo

Entregar uma plataforma de eventos confiável, acessível e mensurável; manter qualquer funcionalidade cripto isolada, opcional e bloqueada por critérios de segurança, produto e conformidade.

## Arquitetura-alvo

```text
Website público (conteúdo, SEO, confiança) ─┐
Portal de eventos e operação               ├─ API/BFF ─ dados, pagamentos, identidade e suporte
Console do organizador                     ─┘
                                                    └─ adaptador on-chain opcional
                                                       (leitura, carteira, transações)
```

### Base tecnológica proposta

- Next.js App Router, TypeScript estrito e React, com Server Components para páginas públicas e componentes cliente apenas onde há interatividade.
- Tailwind atual, design tokens próprios e componentes acessíveis. Evitar dependência de scripts e CSS globais por CDN.
- Backend e base de dados separados por domínios, API versionada, autenticação, autorização por função e registo de auditoria.
- Integrações de carteira via um adaptador tipado e testável, em vez de `window.Web3` e ABIs espalhados; cadeia, endereço, ABI e feature flag definidos por ambiente.
- CMS ou conteúdo versionado para manifesto, ajuda, políticas, eventos editoriais e documentação; páginas normais, não modais.
- Observabilidade com logs estruturados, monitorização de erro, métricas de produto e alertas de disponibilidade.

O App Router atual oferece renderização estática, divisão de código e uso de Server Components por padrão; a checklist de produção da Next recomenda TypeScript, fontes/imagens otimizadas, CSP, metadata, erros globais e análise de Core Web Vitals. [Next.js: production checklist](https://nextjs.org/docs/app/guides/production-checklist)

## Entregáveis documentais antes de código de produto

1. `product-brief.md` — cliente inicial, problema, proposta de valor, escopo e não-escopo.
2. `research.md` — entrevistas, evidências, riscos, concorrentes e decisões que elas suportam.
3. `service-blueprint.md` — jornada, operação humana, suporte, pagamentos, reembolsos e exceções.
4. `design-system.md` — tokens, componentes, tom, acessibilidade e conteúdo.
5. `data-map.md` — dados recolhidos, finalidade, base legal, retenção, responsáveis e integrações.
6. `security-threat-model.md` — superfícies web, conta, pagamento, carteira, contrato e fornecedor.
7. `onchain-readiness.md` — decisão de rede, fontes verificadas, owners/admins, auditoria, pause/upgrade, incident response e critérios de ativação.
8. `launch-checklist.md` — qualidade, acessibilidade, SEO, privacidade, suporte, observabilidade e rollback.

## Fases e gates

| Fase | Resultado | Gate para avançar |
| --- | --- | --- |
| 0. Descoberta | Problema e segmento prioritário validados com entrevistas. | Evidência de dor, proposta de valor compreendida e métrica inicial definida. |
| 1. Fundação | Nova marca/site público, políticas, design system e analytics consentido. | Lighthouse, acessibilidade, conteúdo legal e suporte aprovados. |
| 2. MVP de eventos | Fluxo completo de organizador e participante sem carteira. | Eventos piloto operados com métricas e processo de incidentes. |
| 3. Rede e fidelização | Fornecedores, benefícios e operação recorrente. | Retenção/valor demonstrados e proteção de dados validada. |
| 4. Avaliação on-chain | Documento de decisão, contratos e integração em ambiente de teste. | Parecer jurídico, fontes verificadas, testes, revisão independente e UX testada. |
| 5. Lançamento controlado | Função on-chain limitada e reversível. | Monitorização, limites, comunicação de risco, suporte e plano de resposta aprovados. |

## Padrão de qualidade obrigatório

- Testes unitários, integração e end-to-end para fluxos de receita e de permissão; CI bloqueia merge com falha.
- TypeScript, lint, formatação e análise de dependências automatizados.
- Revisão de acessibilidade com teclado, leitor de ecrã, contraste, zoom e mobile; metas WCAG definidas no escopo.
- CSP, headers de segurança, gestão correta de segredos e verificação de autorização em todo endpoint mutável.
- Backups, migrações reversíveis, ambientes separados e deploy com rollback.
- Revisão independente de contratos e publicação verificável de fontes antes de qualquer transação de utilizador.

OWASP ASVS 5.0 é a referência de verificação para os controlos de segurança web; usá-lo como checklist de requisitos e testes, ajustando o nível ao risco da funcionalidade. [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)

## Critérios para não repetir o estado atual

- Não colocar ABIs, endereços, regras de negócio ou estado de carteira diretamente na camada de UI.
- Não expor compra, staking, pool, swap ou governance a utilizadores sem prova de rede, contrato, riscos, custo e conclusão da transação.
- Não usar linguagem de retorno, investimento, rendimento ou valorização sem revisão jurídica e aprovação explícita.
- Não tratar “build bem-sucedido” como lançamento: medir a experiência real, erros de produção e resultados dos eventos.
- Não migrar dados ou contratos existentes sem inventário, proprietário responsável e plano de rollback.

## Próxima decisão necessária

Escolher o segmento e o primeiro evento piloto. Essa decisão determina fluxos, dados, pagamentos, suporte e até se uma camada blockchain é justificável. Sem ela, implementar uma nova interface seria apenas trocar a estética do protótipo.

