class Currency < ApplicationRecord

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=#{self.slug}"
    request = HTTParty.get(url, headers: { 'X-CMC_PRO_API_KEY' => Rails.application.credentials.dig(:coin_tracker) }
  )
    response = JSON.parse(request.body)
    current_price = response['data'].values[0]['quote']['USD']['price']
  end
end

# ['data'].keys[0]['id']['quote']['USD']['price']
