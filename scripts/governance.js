const governanceContractAddress = '0xbEF4aA7ebe729E1aD2485F8781d6B07D833C16f4';
const governanceABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_governanceToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_votingPeriod",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "proposer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endBlock",
				"type": "uint256"
			}
		],
		"name": "ProposalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ProposalExecuted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "getProposal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "proposer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endBlock",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "governanceToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "proposalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "proposer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endBlock",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "executed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_votingPeriod",
				"type": "uint256"
			}
		],
		"name": "setVotingPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "votes",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Inicializa o Web3 e os contratos
const web3 = new Web3(window.ethereum);
window.governanceContract = new web3.eth.Contract(governanceABI, governanceContractAddress);

// Função para obter a conta do usuário
async function getUserAccount() {
    const accounts = await web3.eth.requestAccounts();
    return accounts[0];
}

// Função para criar uma nova proposta
window.createProposal = async function(title, description) {
    const userAccount = await getUserAccount();
    if (userAccount) {
        try {
            const receipt = await governanceContract.methods.createProposal(title, description).send({ from: userAccount });
            console.log('Proposta criada:', receipt.events.ProposalCreated.returnValues);
            alert('Proposta criada com sucesso!');
            addProposalToUI(receipt.events.ProposalCreated.returnValues.id, title, description);
        } catch (error) {
            console.error('Erro ao criar proposta:', error);
            alert('Erro ao criar proposta');
        }
    } else {
        alert('Conta de usuário não encontrada.');
    }
};

// Função para votar em uma proposta
window.voteOnProposal = async function(proposalId) {
    const userAccount = await getUserAccount();
    if (userAccount) {
        try {
            const receipt = await governanceContract.methods.vote(proposalId).send({ from: userAccount });
            console.log('Voto registrado:', receipt.events.Voted.returnValues);
            alert('Voto registrado com sucesso!');
            updateVoteCountUI(proposalId, receipt.events.Voted.returnValues.weight);
        } catch (error) {
            console.error('Erro ao votar na proposta:', error);
            alert('Erro ao votar na proposta');
        }
    } else {
        alert('Conta de usuário não encontrada.');
    }
};

// Função para executar uma proposta
window.executeProposal = async function(proposalId) {
    const userAccount = await getUserAccount();
    if (userAccount) {
        try {
            const receipt = await governanceContract.methods.executeProposal(proposalId).send({ from: userAccount });
            console.log('Proposta executada:', receipt.events.ProposalExecuted.returnValues);
            alert('Proposta executada com sucesso!');
            markProposalAsExecuted(proposalId);
        } catch (error) {
            console.error('Erro ao executar proposta:', error);
            alert('Erro ao executar proposta');
        }
    } else {
        alert('Conta de usuário não encontrada.');
    }
};

// Função para carregar propostas existentes ao inicializar a página
window.loadProposals = async function() {
    try {
        const proposalCount = await governanceContract.methods.proposalCount().call();
        console.log(`Total de propostas: ${proposalCount}`);

        const start = Math.max(1, proposalCount - 2); // Calcula o início para pegar as últimas 3 propostas

        for (let i = proposalCount; i >= start; i--) {
            try {
                const proposal = await governanceContract.methods.getProposal(i).call();
                if (proposal.id) {
                    addProposalToUI(proposal.id, proposal.title, proposal.description, proposal.voteCount);
                }
            } catch (error) {
                console.error(`Erro ao carregar proposta com ID ${i}:`, error);
            }
        }
    } catch (error) {
        console.error('Erro ao carregar propostas:', error);
    }
};

// Chama a função para carregar as propostas quando a página é carregada
window.addEventListener('load', loadProposals);

// Função para converter votos para uma unidade mais legível
function convertVotes(votesWei) {
    const votesString = web3.utils.toBN(votesWei).toString(); // Converte para BN e então para string
    return web3.utils.fromWei(votesString, 'ether'); // Converte de Wei para Ether (ou outra unidade conforme necessário)
}

// Função para adicionar uma proposta à interface do usuário
function addProposalToUI(id, title, description, voteCount = 0) {
    const convertedVoteCount = convertVotes(voteCount); // Converte os votos para uma unidade legível
    const proposalsContainer = document.getElementById('governanceProposals');
    const proposalCard = `
        <div class="bg-[#202020] text-white rounded-lg shadow-lg p-6" id="proposal-${id}">
            <div>
                <h5 class="text-xl font-semibold mb-2">Proposta ${id} - ${title}</h5>
                <p class="mb-2">${description}</p>
                <p class="text-sm mb-4">Votos: ${convertedVoteCount}</p>
                <button class="bg-[#E730CA] text-white rounded-md py-2 px-4 hover:bg-[#D33CF2] transition-all" onclick="voteOnProposal(${id})">Votar</button>
            </div>
        </div>
    `;
    proposalsContainer.innerHTML += proposalCard;
}


function updateVoteCountUI(proposalId, votes) {
    const convertedVoteCount = convertVotes(votes);
    const proposalCard = document.getElementById(`proposal-${proposalId}`);
    const voteCountElement = proposalCard.querySelector('.vote-count');
    voteCountElement.textContent = `Votos: ${convertedVoteCount}`;
}

function markProposalAsExecuted(proposalId) {
    const proposalCard = document.getElementById(`proposal-${proposalId}`);
    proposalCard.querySelector('.card-body').classList.add('executed');
    const executedMessage = document.createElement('p');
    executedMessage.className = 'executed-message';
    executedMessage.textContent = 'Proposta Executada';
    proposalCard.querySelector('.card-body').appendChild(executedMessage);
}

// Função para lidar com o envio do formulário de criação de proposta
window.handleCreateProposal = function(event) {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Obtém os valores dos campos do formulário
    const title = document.getElementById('proposalTitle').value;
    const description = document.getElementById('proposalDescription').value;

    // Chama a função para criar uma proposta com a descrição fornecida
    createProposal(title, description);
};

// Adiciona listener para o formulário na inicialização
document.getElementById('createProposalForm').addEventListener('submit', handleCreateProposal);



