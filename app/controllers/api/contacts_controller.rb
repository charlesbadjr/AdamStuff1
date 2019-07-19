class Api::ContactsController < ApplicationController

    def index
        render json: Contact.all
    end

    def create
        contact = Contact.new(contact_params)
        render json: {message: 'All Clear'}
    end



    private
       params.require(:contact).permit{:fullName, :message, :phoneNumber, :city, :email }
    end

end
