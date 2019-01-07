# [
#   '---',
#   'レディース',
#   'ベビー・キッズ',
#   '本・音楽・ゲーム',
# ].each do |name|
#   LargeCategory.create!(
#     { name: name }
#   )
# end

# [
#   ['---', 2],
#   ['トップス', 2],
#   ['スカート', 2 ],
#   ['ワンピース', 2],
#   ['---', 3 ],
#   ['キッズ服', 3 ],
#   ['キッズ靴', 3 ],
#   ['オムツ/トイレ/バス', 3 ],
#   ['---', 4 ],
#   ['本', 4 ],
#   ['dvd', 4 ],
#   ['ゲーム', 4 ]
# ].each do |name, id|
#   MiddleCategory.create!(
#     { name: name ,large_category_id: id}
#   )
# end

# [
#   ['---',2],
#   ['シャツ',2],
#   ['ポロシャツ',2],
#   ['キャミソール',2],
#   ['---',3],
#   ['ミニスカート',3],
#   ['ロングスカート',3],
#   ['キュレット',3],
#   ['---',4],
#   ['ミニワンピース',4],
#   ['ロングワンピース',4],
#   ['---',6],
#   ['おくるみ',6],
#   ['下着/肌着',6],
#   ['パジャマ',6],
#   ['---',7],
#   ['サンダル',7],
#   ['ブーツ',7],
#   ['スニーカー',7],
#   ['---',8],
#   ['オムツ',8],
#   ['おまる',8],
#   ['ベビーバス',8],
#   ['---',10],
#   ['文学',10],
#   ['ビジネス',10],
#   ['アート',10],
#   ['---',11],
#   ['洋画',11],
#   ['邦画',11],
#   ['バラエティ',11],
#   ['---',12],
#   ['FF',12],
#   ['キングダムハーツ',12],
#   ['ドラクエ',12],
# ].each do |name, id|
#   SmallCategory.create!(
#     { name: name, middle_category_id: id }
#   )
# end



# [
#   ['ポクポク星人','pokupoku@gmail.com','pokupokupoku','2018-12-12','2018-12-12']
# ].each do |nickname,email,pass,create,update|
#   User.create!(
#     { nickname: nickname, email:email, password: pass, created_at: create, updated_at: update}
#   )
# end

# 洋服のサイズ
# [
#   'XXS以下',
#   'XS(SS)',
#   'S',
#   'M',
#   'L',
#   'XL(LL)',
#   '2XL(3L)',
#   '3XL(4L)',
#   '4XL(5L)以上',
#   'FREE SIZE'
#   ].each do |size|
#     Suit.create!(
#       { size: size }
#       )
#   end

# メンズシューズのサイズ
[
  '23.5cm以下',
  '24cm',
  '24.5cm',
  '25cm',
  '25.5cm',
  '26cm',
  '26.5cm',
  '27cm',
  '27.5cm',
  '28cm',
  '28.5cm',
  '29cm',
  '29.5cm',
  '30cm',
  '30.5cm',
  '31cm以上'
  ].each do |size|
    MenShoe.create!(
      { size: size }
      )
  end

# レディースシューズのサイズ
[
  '20cm以下',
  '20.5cm',
  '21cm',
  '21.5cm',
  '22cm',
  '22.5cm',
  '23cm',
  '23.5cm',
  '24cm',
  '24.5cm',
  '25cm',
  '25.5cm',
  '26cm',
  '26.5cm',
  '27cm',
  '27.5cm以上'
  ].each do |size|
    LadyShoe.create!(
      { size: size }
      )
  end





