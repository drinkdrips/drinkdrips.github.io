Leia-me

# DrinkDrips

DrinkDrips é um projeto de contrato inteligente baseado em Ethereum, composto por três contratos principais: DrinkToken, DripsToken e StakingContract. O projeto permite a compra, staking e recompensa de tokens, incentivando a participação dos usuários através de um sistema de staking e recompensas.

## Sumário

- [Descrição](#descrição)
- [Contratos](#contratos)
  - [DrinkToken](#drinktoken)
  - [DripsToken](#dripstoken)
  - [StakingContract](#stakingcontract)
- [Instalação](#instalação)
- [Deploy](#deploy)
- [Uso](#uso)
  - [Compra de Tokens](#compra-de-tokens)
  - [Staking de Tokens](#staking-de-tokens)
  - [Resgate de Recompensas](#resgate-de-recompensas)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

O projeto DrinkDrips implementa um sistema onde os usuários podem comprar tokens `Drink`, fazer stake desses tokens e receber recompensas na forma de tokens `Drips`. O contrato `StakingContract` gerencia o processo de staking e distribuição de recompensas.

## Contratos

### DrinkToken

`DrinkToken` é um contrato ERC20 que permite a compra de tokens usando Ether ou outros tokens. Os usuários podem fazer stake de seus tokens `Drink` através do contrato `StakingContract`.

- **Eventos:**
  - `TokensPurchased(address indexed buyer, address indexed token, uint256 amountPaid, uint256 amountBought)`
  - `TokensStaked(address indexed staker, uint256 amount)`
  - `TokensUnstaked(address indexed staker, uint256 amount)`

- **Funções:**
  - `buyTokensWithEther()`
  - `buyTokensWithToken(address token, uint256 amount)`
  - `stakeTokens(uint256 amount)`
  - `unstakeTokens(uint256 amount)`

### DripsToken

`DripsToken` é um contrato ERC20 que permite a cunhagem e queima de tokens, controlado pelo proprietário. É utilizado para recompensar os usuários que fazem stake de tokens `Drink`.

- **Eventos:**
  - `TokensMinted(address indexed to, uint256 amount)`
  - `TokensBurned(address indexed from, uint256 amount)`

- **Funções:**
  - `mint(address to, uint256 amount)`
  - `burn(uint256 amount)`

### StakingContract

`StakingContract` gerencia o staking de tokens `Drink` e distribui recompensas na forma de tokens `Drips`.

- **Eventos:**
  - `TokensStaked(address indexed staker, uint256 amount)`
  - `TokensUnstaked(address indexed staker, uint256 amount)`
  - `RewardClaimed(address indexed staker, uint256 amount)`

- **Funções:**
  - `stakeTokens(uint256 amount)`
  - `unstakeTokens(uint256 amount)`
  - `claimReward()`
  - `calculateReward(address staker)`
  - `setDripsToken(address _dripsToken)`
  - `setDrinkToken(address _drinkToken)`

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/drinkdrips.git
cd drinkdrips
```

2. Instale as dependências:

```bash
npm install
```

## Deploy

1. Configure suas variáveis de ambiente com suas chaves privadas e URLs de rede.

2. Compile os contratos:

```bash
npx hardhat compile
```

3. Faça o deploy dos contratos:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## Uso

### Compra de Tokens

Para comprar tokens `Drink` com Ether:

```javascript
await drinkToken.buyTokensWithEther({ value: ethers.utils.parseEther("1") });
```

Para comprar tokens `Drink` com outro token:

```javascript
await drinkToken.buyTokensWithToken(otherTokenAddress, amount);
```

### Staking de Tokens

1. Aprove o `StakingContract` para gastar seus tokens `Drink`:

```javascript
await drinkToken.approve(stakingContractAddress, amount);
```

2. Faça o stake dos tokens:

```javascript
await stakingContract.stakeTokens(amount);
```

### Resgate de Recompensas

Para resgatar as recompensas acumuladas:

```javascript
await stakingContract.claimReward();
```

## Testes

Execute os testes com o Hardhat:

```bash
npx hardhat test
```

## Contribuição

1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---