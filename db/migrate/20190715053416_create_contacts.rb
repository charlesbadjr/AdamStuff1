class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :fullName
      t.string :city
      t.string :residentState
      t.string :email
      t.string :phoneNumber
      t.string :message

      t.timestamps
    end
  end
end
