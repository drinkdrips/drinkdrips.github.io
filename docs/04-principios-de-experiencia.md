# Princípios de experiência e monetização

## Decisões desta primeira entrega

A página pública coloca a proposta de valor antes da tecnologia: eventos, pessoas e organizadores. Não há ligação de carteira, tokens, pacotes de investimento, staking, swap ou promessas financeiras.

O funil inicial é deliberadamente curto:

```text
Visita → entende a proposta → identifica-se como organizador → contacta para um piloto
```

O CTA primário leva ao contacto por e-mail. Não recolhemos dados num formulário sem backend, consentimento, política de retenção e processo de atendimento definidos.

## Regras de UX

- Priorizar uma ação por momento: criar um evento é o CTA principal; explorar a proposta é o secundário.
- Explicar o valor em linguagem quotidiana. “Blockchain”, “token” e “wallet” não são requisitos de compreensão nem de conversão.
- Mostrar preço, taxas, cancelamento, disponibilidade e o que acontece a seguir antes de qualquer pedido de pagamento no futuro.
- Oferecer checkout de convidado quando existir checkout. A investigação do Baymard identifica problemas recorrentes quando essa opção fica escondida ou é apresentada tarde. [Baymard: guest checkout](https://baymard.com/blog/make-guest-checkout-prominent)
- Instrumentar a jornada com eventos mínimos e consentidos: visualização da página, clique em CTA, início de contacto, contacto concluído e origem. Nunca usar telemetria antes de definir privacidade e consentimento.
- Tratar erro, carregamento, vazio e sucesso como partes do fluxo — não como exceções deixadas para o fim.

## Acessibilidade como requisito de conversão

O alvo é WCAG 2.2 AA. A implementação inicial já inclui idioma do documento, link para saltar ao conteúdo, HTML semântico, menu navegável por teclado, foco visível, controlos de toque generosos e redução de movimento quando o utilizador a prefere.

Antes de lançar qualquer fluxo transacional, testar também autenticação acessível, tamanho mínimo de alvo, foco não obstruído, mensagens de estado e prevenção de erros. Estes requisitos fazem parte das recomendações atuais da W3C em WCAG 2.2. [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)

## Monetização a validar

Não assumimos que o token seja o modelo económico. As hipóteses prioritárias, por ordem de teste, são:

1. Comissão transparente por bilhete/venda concluída.
2. Plano profissional mensal para organizadores que precisam de operação, CRM, check-in e dados.
3. Serviços premium para parceiros: promoção, ativações e ferramentas de audiência — sempre com consentimento.

Para cada hipótese, medir receita líquida, margem, custo de suporte, taxa de reembolso, satisfação do organizador e efeito na conversão do participante. Uma funcionalidade que aumenta receita no curto prazo mas aumenta abandono, fraude ou pedidos de apoio não é uma vitória.

## Métricas de qualidade para a próxima fase

| Área | Métrica inicial |
| --- | --- |
| Aquisição | Visita qualificada → clique no CTA de organizador |
| Ativação | Conversas de piloto iniciadas → piloto aceite |
| Conversão | Página de evento → RSVP/checkout concluído |
| Confiança | Reembolsos, contactos de suporte, falhas de pagamento e denúncias |
| Experiência | Conclusão por mobile, teclado e leitor de ecrã; feedback pós-ação |
| Performance | LCP, INP, CLS e tamanho de transferência em dispositivo móvel real |

O próximo PR deve introduzir a base de engenharia e medição somente depois de escolhermos o primeiro segmento de piloto e a forma de captura de lead que tenha suporte e privacidade definidos.
