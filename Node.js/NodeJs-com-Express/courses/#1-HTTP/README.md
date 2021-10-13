## O que é HTTP?
- HTTP → HyperText Trasnfer Protocol
- É um protocolo que possue um conjunto de regras de comunicação
- Segue o modelo de Requisição-Resposta
- Há varias arquiteturas de comunicação, como:
  - Cliente-Servidor:
    - Clara divisão entre cliente e servidor
    - O servidor se torna responsável por fazer toda a tratativa
    - Ex: Sites
  - Peer-to-Peer(P2P)
    - Não há uma clara divisão entre cliente e servidor
    - Cada cliente é um servidor e vice-versa
    - Útil quando:
      -  se há necessidade de distribuir o trabalho
      -  baixar algo de vários lugares diferentes
   -  Ex: Torrent
- O Browser é um exemplo de cliente da aplicação
- O HTTP é responsável por definir a forma de como os dados são trafegados na rede através de várias regras

## A versão segura - HTTP
- O HTTP trafega texto puro, facilitando assim a intermediação dos valores enviados
- HTTPS → é a versão segura dessa transmissão de dados, viabilizando assim uma segurança maior no trafego de dados
- Para utilização do HTTPS é necessario um certificado digital(identidade), fazendo com que os dados sejam enviados ao servidor de maneira criptografada, através de uma chave pública. Ao chegar no servidor, o mesmo possue a chave de descriptografia(chave privada) desses dados, fazendo assim com que os dados possam ser lidos pelo servidor.
- Os certificados possuem identidade e validade
- Os certificados são emitidos por autoridades certificadoras, como por exemplo a COMODO
- Métodos de criptografia:
  - criptografia assimétrica
    - chave pública e chave privada
    - é lenta
  - Criptografia simétrica
    - utiliza da mesma chave para criptografar e descriptografar
    - menos segura
- Os navegadores utilizam de uma forma híbrida de criptografia
  - O cliente possue uma chave pública e o servidor a privada
  - No inicio da comunicação é gerada e enviada uma criptografia simétrica, facilitanto assim a descriptgrafia por parte do servidor
  - Essa chave gerada na primeira requisição é reaproveitada para outras requisições de um mesmo cliente

## Endereços sob seu domínio
- Todo domínio possue endereçamento IP
- O DNS(Domain Name System) é o responsável por fazer a transcrição entre o nome do site/servidor e seu endereçamento IP
  - EX: 
    - site: google.com
    - ip do servidor: 172.217.29.68
    - Ação do DNS → a requisição conversa com o DNS e o mesmo retorna o endereço ip do servidor
- O servidor pode ter várias portas abertas
  - o HTTP possue por default a porta 80
  - o HTTPS possue por default a porta 443
  - o FTP possue por default a porta 21
  - o SSH possue por default a porta 22
- URL são endereços da WEB
  - uma URL começa com o **protocolo**, seguido pelo **domínio**
  - após o domínio é especificado o **caminho** para um **recurso**
  - um **recurso** é algo contreto que queremos acessar
  - EX: http://www.youtube.com/videos-favoritos
  - protocolo → http
  - domínio → www.youtube.com
  - recurso → videos-favoritos
- URI x URL x URN
  - URL → é o domínio
  - URN → é o recurso
  - URI → é o conjunto todo(protocolo + URL + URN)

## O cliente pede e o servidor responde
- O HTTP é stateless, ou seja, não guarda estado
- As requisições HTTP são independentes
- Para que um usuário não precise sempre estar enviando suas credenciais, o servidor envia uma identificação para o browser, mantendo assim a seção do usuário ativo.
- Uma sessão HTTP nada mais é que um tempo que o cliente permanece ativo no sistema
- Essa identificação geralmente é um cookie
- Cookies:
  - é um pequeno arquivo de texto, que guarda algumas informações sobre o usuário no navegador
  - essas informações são diversas e variam de acordo com o intuito da aplicação que está em uso
  - os cookies são associados a domínios e podem ter mais de um por domínio
  - visualização dos cookies salvos:
    - Configurações → Privacidade e segurança → Todos os cookies e dados de site...

## Depurando a requisição HTTP
- Ao abrir o console do navegador e clicar na aba NETWORK, é possível ver todas as ações feitas na requisição em questão.
- No console, é possível ver vários dados com relação a requisição como por exemplo:
  - status code
    - 2xx → Successfull Responses
    - 3xx → Redirection Messages
    - 4xx → Client Error Responses
    - 5xx → Server Error Responses
    - [HTTP Status](https://httpstatuses.com/)
  - response headers
  - method

## Parâmetros da requisição
- methods:
  - GET:
    - buscar um recurso
    - os parâmetros são explicitos
    - geralmente são valores na url encontradados após o "?"
    - multiplos parâmetros são separados por "&"
    - ex: http://www.dominio.com/recurso/?nome_do_parametro=seu_valor&nome_do_outro_param=valor
  - POST:
    - enviar/adicionar um recurso
    - os parâmetros são implicitos
    - são enviados no corpo da própria requisição e não pela URL
  - DELETE:
    - remover um recurso
  - PUT:
    - atualizar um recurso
  - DELETE e PUT geralmente são utilizados por Web Services

## Serviços na web com REST
- Em uma aplicação mobile "conversa" com uma aplicação web
- Geralmente as respostas são em JSON, XML, SOAP, HTML
- Nos Headers, pode-se especificar o tipo de resposta desejada
  - ex: ``` Accept: application/json ```
  - ex: ``` Accept: application/xml ```
  - ex: ``` Accept: text/html ```
  - ex: ``` Accept: text/css ```
  - [para mais formatos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- Há uma padronização na criação de API's
  - [article 1](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
  - [article 2](https://www.partech.nl/nl/publicaties/2020/07/9-trending-best-practices-for-rest-api-development#)
  - [article 3](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
  - [article 4](https://swagger.io/resources/articles/best-practices-in-api-design/)
  - [article 5](https://www.merixstudio.com/blog/best-practices-rest-api-development/)

## HTTP/2
- Aumento de performance devido:
  - O response body foi comprimido para o formato GZIP
  - Envia/Recebe, além de texto puro, binários
  - Utilização do HPACK para comprimir os headers
- Por padrão, já criptografa os dados, visto que atualmente há uma grande quantidade de dados críticos sendo manipulados na WEB
- No HTTP/2 após a primeira requisição, somente os novos dados(os dados alterados) do header precisam ser enviados. Essa prática é conhecida como Headers Stateful. Diminuindo assim o uso da banda do cliente
- Server push:
  - quando o cliente faz uma requisição para o servidor, o mesmo(servidor) já retorna todos os recursos necessários para que a página possa ser mostrada com sucesso
  - no HTTP/1, o cliente faz todas as requisições, uma a uma, para poder mostrar a página
- Multiplexing:
  - no HTTP2, as requisições são paralelas, recebendo as respostas na ordem de retorno e não de envio
  - já no HTTP/1, há disponibilidade de 4 a 8 conexões simultâneas