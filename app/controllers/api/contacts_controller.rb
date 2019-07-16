class Api::ContactsController < ApplicationController

    def index
        contacts=@contacts.all
    
    end

    def create
        contacts.new(contact_params)
        return
          message(gotem);
        else
        contact.errors
        end

    end



    private
       contacts.permit(contactparms{ :fullName :message :phoneNumber :city :email })
    end

end
