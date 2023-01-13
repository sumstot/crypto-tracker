class CurrenciesController < ApplicationController
  def index
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}").or(Currency.where('LOWER(currency_symbol) LIKE ?', "%#{params[:search].downcase}"))
    render json: { currencies: @currencies }
  end

  #takes in the currency id and the amoutn ownder
  def calculate
    amount = params[:amount]
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amount: amount,
      value: currency.calculate_value(amount)
    }
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
