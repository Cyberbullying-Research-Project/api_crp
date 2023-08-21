// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

/*

Table categories {
  id integer [primary key]
  name varchar
  description varchar
  keywords varchar
}

Table narratives {
  id integer [primary key]
  title varchar
  body text [note: 'Narrativa digital']
  user_id integer
  status varchar
  created_at timestamp  
  posts post_id
  category category_id
}

Table posts {
  id integer [primary key]
  title varchar
  body text [note: 'Content of the post']
  user_id integer
  status varchar
  created_at timestamp
  resources resource_id
}

Table resources{
  id integer [primary key]
  name varchar
  description varchar
  created_at timestamp
  created_by user_id
  path varchar
  type varchar
  size number
}

Table users {
  id integer [primary key]
  username varchar
  password varchar
  image varchar
  role varchar
  created_at timestamp
  narratives narrative_id
}


Ref: users.id < narratives.id 
Ref: narratives.id < posts.id 
Ref: posts.id < resources.id
Ref: resources.created_by > users.id
Ref: narratives.category > categories.id
*/