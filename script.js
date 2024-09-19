import usuarios from './prova-logica-FS36/login';

        
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            
            const usuarioEncontrado = usuariosCadastrados.find(usuario => usuario.email === email && usuario.senha === senha);

            if (usuarioEncontrado) {
            
                window.location.href = 'home.html'; // adicionar página html home
            } else {
                alert('Email ou senha inválidos!');
            }
        });