# 🚀 App 1.0 - App Base CI/CD com Docker & Kubernetes

Este projeto é uma aplicação Node.js containerizada com Docker e preparada para integração e entrega contínua (CI/CD) via GitLab. Ele serve uma página HTML simples e é projetado para ser orquestrado com Kubernetes.

## 🧪 Tecnologias utilizadas

- Node.js + Express
- Docker
- GitLab CI/CD
- Kubernetes
- Jest + Supertest

## 📂 Estrutura do Projeto

- `app/`: código-fonte do app
- `Dockerfile`: imagem da aplicação
- `.gitlab-ci.yml`: pipeline CI/CD no GitLab
- `k8s/`: arquivos de orquestração Kubernetes

## ▶️ Executando localmente

```bash
# Instale as dependências
cd app
npm install

# Rode o servidor
npm start

# Acesse: http://localhost:3000
