const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emoji = '♔♕♖♗♘♙CHESS♚♛♜♝♞♟'
const katana = 'グズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッ'
const alphabet = katana +emoji;


const fontSize = 16;
const coluna = canvas.width/fontSize;

const chuvinha = [];

for(let x = 0; x < coluna; x++){
    chuvinha[x] = 1;
}

const Matrixdesenho = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width ,canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < chuvinha.length; i++){
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize,chuvinha[i]*fontSize);

        if(chuvinha[i]*fontSize > canvas.height && Math.random() > 0.975){
            chuvinha[i] = 0;
        }
        chuvinha[i]++;
    }
};
setInterval(Matrixdesenho,30)