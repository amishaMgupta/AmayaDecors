# AmayaDecors
The Amaya Decor Repo


## Aboutus
# Point of Sales

 Amaya Decors is a Manufacturer & Supplier of Home & Kitchen Decor Products into Iron , Wooden and Porclien Material. As of now they were selling through departmental storaes & social media  and all the recors were maitianed Manually .But now in the covid world they have to move their Business online. 

The application contain UI (React/Angular) and a backend(nodejs)

## Core features (mandatory to implement)

1. Any user can see all the products without login
2. The application should support 2 roles 
    1. admin
    2. customer
3. An user should be able to login via any ROLE but register into the application can be done into customer role
### admin role:-
1. the application should have default admin user with 
    - username "admin"
    - password "password"
2. Admin should see the dashboard which contain the following options:-
    - users
    - products 
    - customers.
    - sales

2. Admin can perform CURD on users in both roles
3. Admin can perform CURD on products
4. Admin can perform CURD on sales
5. Admin can print the bill.
6. Admin can see the reports
    - customer wise
    - date wise sale
    - product wise
### Customer
1. As soon as any visitor register the default role should be customer
2. As a custome i can see a dashboard will all the products.
3. With every product there should be add to cart as well buy now option with quantity.
4. on Cart there is an checkout option.
5. As soon as checkout done the admin should get an mail which contains the Cart details and customer contact information

## Expected collections:-
1. custome:-
    username:
    emailid:(primary key)
    phonenumber:[]
    role:(default:-Customer) 
    password:
    address:[{}]
    cart:
    
2. products:-
    productId:(primary key)
    productName
    productImage:[{string:url to the file on server} ]
    productSize:
    costPrice:
    wholeSale:(costprice+costPrice*50%)
    retailPrice:(costprice+costprice*100)
    quantityAvalable:
    productDesc:

3. salse:-
    billnumber:(primary key)
    date:
    customerEmailId
    productInfo:[{
        productId,
        quantity,
        priceperpeces
    }]
    total bill
    GST:(totalbill*5%)
    billingAmount

### Note:-
1. as soon as there is an entery in sale table the quantity in product table should be reduced.
