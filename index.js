// criando uma função para abrir a tela de cadastro
  // 1 - Os dois botoes
const studentRegisterButton = document.getElementById('studentButton');
const teacherRegisterButton = document.getElementById('teacherButton');
  // 2 - O container principal
const container = document.querySelector('.container');
  // 3 - As divs principais a serem trocadas
const photoBox = document.querySelector('.photoBox');
const registerBoxes = document.querySelector('.registerBoxes');

  // 4 - As divs/botão que vão entrar de cada área(estudante ou professor)
const iconBack = document.querySelector('.iconBack'); //botao pra voltar ao container principal
const studentPhoto = document.querySelector('.studentPhoto'); //foto estudante
const studentFormContainer = document.querySelector('.studentFormContainer'); //form estudante

const teacherPhoto = document.querySelector('.teacherPhoto');  
const teacherFormContainer = document.querySelector('.teacherFormContainer');


// funcao:
studentRegisterButton.addEventListener('click', () => {
  registerBoxes.style.transform = 'translateX(120%)';
  photoBox.style.transform = 'translateX(-120%)';
  iconBack.style.display = 'block';  
  studentPhoto.style.transform = 'translateY(0%)';
  studentFormContainer.style.transform = 'translateY(0%)';  
})

teacherRegisterButton.addEventListener('click', () => {
  registerBoxes.style.transform = 'translateX(100%)';
  photoBox.style.transform = 'translateX(-100%)';
  iconBack.style.display = 'block';  
  teacherPhoto.style.transform = 'translateY(0%)';
  teacherFormContainer.style.transform = 'translateY(0%)'; 
})



// botao de voltar pra tela pricnipal
iconBack.addEventListener('click', () => {
  if (studentPhoto.style.transform === 'translateY(0%)' && studentFormContainer.style.transform === 'translateY(0%)') {
    registerBoxes.style.transform = 'translateX(0%)';
    photoBox.style.transform = 'translateX(0%)';
    iconBack.style.display = 'none';
    studentPhoto.style.transform = 'translateY(-200%)';
    studentFormContainer.style.transform = 'translateY(-400%)';
  } else if (teacherPhoto.style.transform === 'translateY(0%)' && teacherFormContainer.style.transform === 'translateY(0%)') {
    registerBoxes.style.transform = 'translateX(0%)';
    photoBox.style.transform = 'translateX(0%)';
    iconBack.style.display = 'none';
    teacherPhoto.style.transform = 'translateY(200%)';
    teacherFormContainer.style.transform = 'translateY(400%)';
  }
});

// imagem mudar de tamanho
