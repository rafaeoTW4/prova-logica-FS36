import usuarios from '';    //Inserir  o caminho para o arquivo js que contém o array

        
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

        document.addEventListener('DOMContentLoaded', () => {
            const togglePassword = document.getElementById('togglePassword');
            const password = document.getElementById('senha');
        
            if (togglePassword && password) {
                togglePassword.addEventListener('click', () => {
                    // Toggle the type attribute
                    const type = password.type === 'password' ? 'text' : 'password';
                    password.setAttribute('type', type);
        
                    // Toggle the eye icon
                    togglePassword.classList.toggle('fa-eye');
                    togglePassword.classList.toggle('fa-eye-slash');
                });
            }
        });
        
        