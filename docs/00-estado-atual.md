# DrinkDrips — estado atual verificado

_Leitura do repositório em 21 de agosto de 2026. Este documento descreve evidências presentes no código; não confirma dados on-chain, legais, económicos ou comerciais._

## O que é a DrinkDrips hoje

A DrinkDrips apresenta-se como uma iniciativa de blockchain para entretenimento e eventos. A proposta declarada é ligar investidores, organizadores, prestadores de serviço e participantes num ecossistema tokenizado para criação, gestão e experiências de eventos.

O produto público é uma única página estática (`index.html`) que reúne:

- comunicação institucional, visão, missão, valores, equipa e história;
- whitepaper, tokenomics, casos de uso e roadmap, todos dentro de modais;
- ligação a carteira MetaMask;
- fluxos de compra de DRINK, aprovação, staking, unstaking e resgate de DRIPS;
- liquidez, governance e uma interface de swap marcada como “em breve”; e
- packs promocionais e imagens de marca.

O único membro de equipa identificado é David Morato. Não há, no repositório, política de privacidade, termos, contactos, redes sociais funcionais, licença ou canal de suporte.

## Modelo de produto declarado

| Elemento | Papel declarado |
| --- | --- |
| `DRINK` | Ativo principal para investidores e organizadores; acesso à gestão/criação de eventos e staking. |
| `DRIPS` | Moeda utilitária/consumo para recompensas, benefícios, serviços e personalização de experiências. |
| Staking | Bloqueio de DRINK com recompensa em DRIPS. |
| Liquidez | Pool DRINK/ETH com adição/remoção de liquidez e rewards. |
| Governance | Propostas, votos e execução de propostas ponderados pelo token. |
| Eventos | Caso de uso futuro: gestão, fidelização/cashback, patrocínio, networking e experiências. |

Há uma tensão importante a resolver: a comunicação alterna entre utilidade de plataforma de eventos e venda/investimento de tokens. A reformulação precisa começar pelo problema real do cliente e pelo valor entregue antes de reintroduzir qualquer token ou promessa financeira.

## Implementação existente

- HTML, CSS e JavaScript sem framework de interface; Tailwind 3 é compilado de `src/styles.css` para `dist/styles.css`.
- `package.json` contém script de CSS e um `dev` de Next.js, mas Next.js não é dependência declarada nem há aplicação Next no repositório.
- Web3.js 1.3.6, Alpine.js, Typed.js e Font Awesome são carregados por CDN. A página inclui dois Font Awesome diferentes.
- A página tem aproximadamente 2,5 mil linhas; os ABIs dos contratos estão embutidos em quatro ficheiros JavaScript, que juntos têm mais de 5 mil linhas.
- Há assets de marca locais, mas também imagens de packs hospedadas em URLs externas do Google.
- O histórico Git mais recente é de 6 de junho de 2025. Não há pipeline CI, testes aplicacionais, lint, type-check, formatter, monitorização ou deploy configurado.

## Integrações on-chain configuradas

Os endereços abaixo são factos de configuração do front-end. Eles **não foram validados** quanto a rede, titularidade, código publicado, auditoria, estado ou adequação para produção.

| Contrato | Endereço configurado | Operações expostas no cliente |
| --- | --- | --- |
| DrinkToken | `0x3FC6d60A0360401666aF50162BCDbb3423879c61` | `buyTokensWithUsd`, ERC-20, whitelist, pause, mint e ligação a staking. |
| DripsToken | `0x3720D62bcFb9b55890F5B22bb4C8e0143405437E` | ERC-20, mint/burn, rewards, penalidades e transferências condicionais. |
| Staking | `0xEA6AC212caed7a51C69CB33350d1487aB2f8Cf1D` | stake/unstake, cálculo e claim de rewards, contagens de stake. |
| Liquidity pool | `0x2c3A978aCBEE88b2cBd9864660D257504deca605` | adicionar/remover liquidez, rewards, fee e price feed. |
| Governance | `0xbEF4aA7ebe729E1aD2485F8781d6B07D833C16f4` | criar, votar e executar propostas; período de voto. |
| Swap | `0x31DE3c8436F625fb1596287C24f0C0E9eE1AD6E5` | swap DRINK/ETH/tokens e fee. |

A instrução no site aponta a carteira para Polygon Amoy. Contudo, o front-end não verifica ou troca de cadeia antes de enviar transações. O repositório não contém os fontes Solidity, artefactos de compilação, scripts de deploy, testes de contratos, endereços por ambiente, auditorias nem documentação de propriedade/administração.

## Riscos e lacunas observáveis

1. **Não está apto para movimentar valor.** Não há base suficiente para afirmar que os contratos são seguros, que as transações exibidas apontam para a rede certa, nem que os fluxos de compra, pool e swap funcionam.
2. **A interface de swap está quebrada/incompleta no código.** Faz referência a IDs, variáveis e métodos que não estão definidos de forma compatível com o formulário e contrato configurado.
3. **Há acoplamento global e concorrência de estado.** Cada módulo cria o seu próprio `Web3`, escreve em `window` e escuta eventos da carteira. Isso torna conta, cadeia, erros e atualização de UI inconsistentes.
4. **Faltam proteções de experiência e segurança.** Não há simulação/preview de transação, confirmação de cadeia, tratamento acessível de erros, estado pendente, validação robusta, limites explícitos de aprovação ou recuperação diante de falhas.
5. **Conteúdo e produto estão misturados.** Toda a documentação vive em modais longos; os menus têm placeholders e links sociais vazios. Isso reduz legibilidade, indexação, partilha e confiança.
6. **Há incoerências técnicas/documentais.** O README descreve contratos e comandos Hardhat que não existem neste repositório; `npm test` falha intencionalmente; o ano do copyright é 2024.
7. **A dimensão regulatória não foi tratada.** Venda de tokens, linguagem de investimento, staking/rewards, pool, swap e governance exigem parecer jurídico por jurisdição antes de qualquer lançamento público. Isto não é uma conclusão jurídica; é uma condição de descoberta e risco.

## Decisão de partida recomendada

Não evoluir incrementalmente a página atual nem reativar transações. Preservar este repositório como referência histórica e reconstruir em paralelo, começando por uma experiência de eventos útil sem carteira. O módulo on-chain só poderá entrar depois de validação jurídica, definição económica, fontes e auditoria dos contratos, e um lançamento controlado.

