FORMAT: 1A
HOST: http://45.86.68.155:3000/api/v2

# Mock Up Api Express

Latihan Express Eduwork

## Product Collection [/product]

### Create a New Product [POST]

+ Request (application/json)

        {
            "id": 1,
            "name":"Sepatu"
            "price": 250000,
            "stock": 15,
            "description":"Sepatu Berkualitas Terbaik di Indonesia",
            "status":1,
            "image":"http://45.86.68.155:3000/public/u2205.svg",  
        }


### List All Products [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "name":"Sepatu"
                "price": 250000,
                "stock": 15,
                "description":"Sepatu Berkualitas Terbaik di Indonesia",
                "status":true,
                "image_url":"http://45.86.68.155:3000/public/u2205.svg",
                "createdAt": "2021-10-14T10:27:53.000Z",
                "updatedAt": "2021-10-14T10:27:53.000Z"
                
            }
        ]
        
## Product Collection By id [/product/:id]

### List Product [GET]

+ Response 200 (application/json)

        [
            {
                "id": 1,
                "name":"Sepatu"
                "price": 250000,
                "stock": 15,
                "description":"Sepatu Berkualitas Terbaik di Indonesia",
                "status":true,
                "image_url":"http://45.86.68.155:3000/public/u2205.svg",
                "createdAt": "2021-10-14T10:27:53.000Z",
                "updatedAt": "2021-10-14T10:27:53.000Z"
                
            }
        ]


### Update Product [PUT]

+ Request ( application/json )
      
       {
          "id": 1,
          "name":"Sepatu"
          "price": 250000,
          "stock": 15,
          "description":"Sepatu Berkualitas Terbaik di Indonesia",
          "status":1,
       }

### Delete Product [DELETE]
+ Response 200 (application/json)
  {
  
  }

       
## Product Collection [/product?search="keyword"]


### Search Product By Keyword [GET]

+ Response 200 (application/json)
       
       [
           {
               "id": 1,
               "name":"Sepatu"
               "price": 250000,
               "stock": 15,
               "description":"Sepatu Berkualitas Terbaik di Indonesia",
               "status":true,
               "image_url":"http://45.86.68.155:3000/public/u2205.svg",
               "createdAt": "2021-10-14T10:27:53.000Z",
               "updatedAt": "2021-10-14T10:27:53.000Z"
                
            }
        ]


