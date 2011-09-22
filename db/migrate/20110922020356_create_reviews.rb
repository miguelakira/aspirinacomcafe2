class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :product
      t.integer :post_id
      t.float :score
      t.text :good
      t.text :bad
      t.text :conclusion

      t.timestamps
    end
  end
end
