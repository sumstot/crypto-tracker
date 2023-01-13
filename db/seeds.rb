# Author: github.com/zayneio
#
# This seed file contains a list of data for 1,316 unique cryptocurrencies
#
# Fields:
# @name [String] the name of the currency
# @max_supply [Bigint] the max_supply for the currency
# @currency_symbol [String] the currency symbol for the currency
# @slug [String] a slug for each currency formatted to work with the CoinMarketCap API (api.coinmarketcap.com)
#
# Example use:
# rails g model Currency name max_supply:bigint currency_symbol slug
# rails db:migrate
# rails db:seed
Currency.destroy_all

coins = []
url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=200&aux=cmc_rank,max_supply,total_supply"
request = HTTParty.get(url, headers: { "X-CMC_PRO_API_KEY" => Rails.application.credentials.dig(:pro_api_key)}
)
response = JSON.parse(request.body)
coinmarketcap_map = response['data']
new_coinmarketcap_map = coinmarketcap_map.flatten

new_coinmarketcap_map.each do |coin|
  new_coin = { name: coin['name'], currency_symbol: coin['symbol'], max_supply: coin['max_supply'], slug: coin['slug']}
  coins << new_coin
end

Currency.create(
  coins
)
