# Cyptowatcher

## Opgave

Bouw een applicatie die Crypto data ophaalt van [CoinmarketCap API documentatie](https://coinmarketcap.com/api/documentation/v1/).
Hiervoor dien je eerst een API key te genereren op [CoinmarketCap](https://accounts.coinmarketcap.com/signup?r=https%3A%2F%2Fcoinmarketcap.com%2F&utm_source=coinmarketcap&utm_content=nav)

> Aangezien coinmarketCap geen CORS requests toelaat kan je gebruik maken van de proxy op de url:
>
> - <http://steegmans.synology.me/cryptowatcher/listings.php?CMC_PRO_API_KEY=##API-KEY##&slug=##SLUG##>
> - <http://steegmans.synology.me/cryptowatcher/quote.php?CMC_PRO_API_KEY=##API-KEY##>
>
> **Hiervoor heb je nog steeds je eigen API-key nodig!**

Hou rekening met de volgende eigenschappen:

- Bij het opstarten van de applicatie moeten de volgende stappen uitgevoerd worden
  - De tabel met top 10 munten moet gecreëerd en getoond worden
    Hiervoor dien je per coin het volgende sjabloon toe te voegen aan ```<tbody>```

      ```html
      <tr>
        <th scope="row">6</th>
        <td>Litecoin</td>
        <td>€ 5721270037</td>
        <td>€ 103.86</td>
        <td>€ 674197999.62</td>
        <td class="down">-28.82%</td>
        <td><img src="/img/info-circle-solid.svg" alt="Klik voor meer details" /></td>
      </tr>
      ```

  - Op de image in de laatste kolom moet een **click-handler** gekoppeld worden. Bij het klikken moet de individuele coin data opgehaald worden en getoond in een **modal-venster**.
- Bij het genereren van het 'modal-venster' moet je de volgende dingen uitvoeren
  - Het juiste logo weergeven (img/currency/##SYMBOL##.png) & alt text correct invullen
  - text in de modalHeader aanpassen
  - text van span met **ID="currencyPrice"** opvullen met de prijs in euro
  - text van span met **ID="currencyChange"** opvullen met de change in 24h
  - text van span met **ID="volume24h"** opvullen met het volume in 24h
  - text van span met **ID="marketCap"** opvullen met de market cap in euro
  - text van span met **ID="totalSupply"** opvullen met de total supply
  - text van span met **ID="maxSupply"** opvullen met de max supply
  - href van anchor met **ID="lnkCoinmarketcap"** opvullen met de link naar coinmarketcap (<https://coinmarketcap.com/nl/currencies/##SLUG##>)
  - De div met **ID="card"** moet getoond worden
  - De div met **ID="top10"** moet verborgen worden
