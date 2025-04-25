# Repositório GitHub para o Sistema de Controle de Elevadores Montacarga

Este arquivo README contém instruções para configurar o repositório GitHub e implantar o projeto no Vercel.

## Configuração do Repositório GitHub

1. Acesse [GitHub](https://github.com) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Dê um nome ao repositório (ex: "elevador-montacarga")
4. Escolha a visibilidade (público ou privado)
5. Não inicialize o repositório com README, .gitignore ou licença
6. Clique em "Create repository"

## Comandos para inicializar o repositório local e enviar para o GitHub

```bash
# Navegue até a pasta do projeto
cd /caminho/para/elevador-site-simples

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit inicial
git commit -m "Versão inicial do sistema de controle de elevadores montacarga"

# Adicione o repositório remoto (substitua USER pelo seu nome de usuário e REPO pelo nome do repositório)
git remote add origin https://github.com/USER/REPO.git

# Envie o código para o GitHub
git push -u origin main
```

## Implantação no Vercel

1. Acesse [Vercel](https://vercel.com) e faça login (pode usar sua conta GitHub)
2. Clique em "Add New" e selecione "Project"
3. Importe o repositório GitHub que você acabou de criar
4. Mantenha as configurações padrão do Next.js
5. Clique em "Deploy"

A Vercel irá automaticamente detectar que é um projeto Next.js, instalar as dependências e fazer o build.
