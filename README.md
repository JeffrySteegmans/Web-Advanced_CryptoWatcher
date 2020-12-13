# Cyptowatcher

## Opgave

Bouw een applicatie die Crypto data ophaalt van [CoinmarketCap API documentatie](https://coinmarketcap.com/api/documentation/v1/).
Hiervoor dien je eerst een API key te genereren op [CoinmarketCap](https://accounts.coinmarketcap.com/signup?r=https%3A%2F%2Fcoinmarketcap.com%2F&utm_source=coinmarketcap&utm_content=nav)

Hou rekening met de volgende eigenschappen:

- Bij het opstarten van de applicatie moeten de volgende stappen uitgevoerd worden
  - De div met **ID="card"** moet verborgen worden
  - De div met **ID="top10"** moet getoond worden
  - De tabel met top 10 munten moet gecreëerd en getoond worden (https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=##API-KEY##&limit=10&convert=eur)
    Hiervoor dien je per coin het volgende sjabloon toe te voegen aan ```<tbody>```

      ```html
      <tr>
        <th scope="row">6</th>
        <td>Litecoin</td>
        <td>€ 5721270037</td>
        <td>€ 103.86</td>
        <td>€ 674197999.62</td>
        <td class="down">-28.82%</td>
      </tr>
      ```

  - Op de knop **btnTop10** moet een eventhandler **'click'** gekoppeld worden die de top 10 coins gaat ophalen en tonen in een tabel
  - op de volgende knoppen moet een eventhandler **'click'** gekoppeld worden die een **'card'** genereerd
    | Button        | coin          | slug          | id    |
    | ------------- |---------------|---------------| :----:|
    | btnBTC        | Bitcoin       | bitcoin       |     1 |
    | btnETH        | Ethereum      | ethereum      |  1027 |
    | btnLTC        | Litecoin      | litecoin      |     2 |
    | btnADA        | Cardano       | cardano       |  2010 |
    | btnNEO        | Neo           | neo           |  1376 |
- Bij het genereren van de 'card' moet je de volgende dingen uitvoeren (https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=##API-KEY##&convert=eur&id=##ID## of https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=##API-KEY##&convert=eur&slug=##SLUG##)
  - Het juiste logo weergeven (img/##SYMBOL##.png) & alt text correct invullen
  - text in de cardHeader aanpassen
  - text van span met **ID="price"** opvullen met de prijs in euro
  - text van span met **ID="delta"** opvullen met de change in 24h
  - text van span met **ID="priceBTC"** opvullen met de prijs in btc
  - text van span met **ID="volume24h"** opvullen met het volume in 24h
  - text van span met **ID="marketCap"** opvullen met de market cap in euro
  - text van span met **ID="totalSupply"** opvullen met de total supply
  - text van span met **ID="maxSupply"** opvullen met de max supply
  - href van anchor met **ID="lnkCoinmarketcap"** opvullen met de link naar coinmarketcap (https://coinmarketcap.com/nl/currencies/##SLUG##)
  - De div met **ID="card"** moet getoond worden
  - De div met **ID="top10"** moet verborgen worden