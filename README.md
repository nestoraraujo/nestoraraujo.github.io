# Portfólio de Nestor Araujo

Site estático para o GitHub Pages. Sem build, sem dependências: abra `index.html` no navegador para ver como está.

## Colocar no ar (10 minutos)

1. No GitHub, crie um repositório **público** chamado `nestoraraujo.github.io` (o nome precisa ser exatamente esse).
2. Envie o conteúdo desta pasta para a raiz do repositório (botão **Add file → Upload files**, ou `git push`).
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. Em um ou dois minutos o site abre em `https://nestoraraujo.github.io`.
5. Em **Settings → General → Features**, ative **Discussions** para o botão “Abrir uma conversa no GitHub” fazer sentido.

Antes de publicar, troque `nestoraraujo` em `assets/data.js` (campo `github`) e, se quiser, preencha `linkedin`.

## Como editar

Todo o conteúdo está em `assets/data.js`. Para acrescentar algo, copie um bloco da lista e edite:

| Quero adicionar | Onde | Detalhe |
|---|---|---|
| Um projeto | `PROJETOS` | `estado`: em andamento, concluído ou em preparação. `detalhes` abre na janela “Ver detalhes”. |
| Um experimento | `LAB` | Crie uma pasta em `laboratorio/nome/` com um `index.html` e aponte `url` para ela. |
| Um guia ou livro | `PUBLICACOES` | Coloque o PDF em `publicacoes/` e preencha `arquivo`. Sem `arquivo`, aparece “Em preparação”. |
| Uma ideia | `IDEIAS` | `estado`: explorando, rascunhando ou procurando parceria. |
| Uma fase da trajetória | `CURRICULO.experiencia` | Resumo, sem telefone nem e-mail; o contato público é o LinkedIn. |

Imagens e capturas de tela ficam em `assets/` (por exemplo `assets/img/`).

## Estrutura

```
index.html            página única, com as seções
assets/data.js        todo o conteúdo
assets/style.css      visual (claro e escuro automáticos)
assets/app.js         monta as listas a partir de data.js
laboratorio/          experimentos, um por pasta
publicacoes/          PDFs
```

## Antes de publicar: dois cuidados

1. **Painel de KPIs (`.pbix`).** O arquivo guarda o modelo de dados importado (cerca de 20 MB). Abra-o no Power BI Desktop e passe pelas páginas Ownership, Ativos e Domínios e times: se aparecerem nomes ou e-mails de colegas, ou nomes de bases internas, substitua por dados fictícios antes de subir. Depois de publicado no GitHub, o arquivo fica no histórico mesmo que você o apague.
2. **Guia de emagrecimento.** O PDF traz medicamentos, condições de saúde e a foto de uma criança. Confirme que quer isso público; para retirar, esvazie o campo `arquivo` desse guia em `assets/data.js` e apague o PDF.
