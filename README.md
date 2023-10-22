# Crud Assis

A brief description of what this project does and who it's for I write a crud who has takes username, email and password for registration and also login.This is small assisgment for improving a code and some things.




## API Reference

#### Get all items

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | we print some home page msg |

#### POST item

```http
  POST /register
```

| Parameter | Type     | Description                                                    |
| :-------- | :------- | :-------------------------------- -----------------------------|
|`/register`| `string` | here we are register some users using name ,email and password |


#### POST item
```http
  POST /login
```

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `/login` | `string` | here we are login who has register using credentials|



## Authors

- [@anshmaurya](https://www.github.com/anshmaurya7803)


## Demo

#### Register page

we requests POST METHOD on this URL http://localhost:5000/register  and gives input in json format like this
{
    "name":"jai ho",
    "email":"joho@gmail.com",
    "password":"mauryaansh7803"
}

then gives me outputs
{
    "msg": "User Registered Successfully"
}

we requests POST METHOD on this URL http://localhost:5000/login and gives input in json format like this
{
    "email":"joho@gmail.com",
    "password":"mauryaansh7803"
}

then gives me output
{
    "msg": "User Login Successfully, Enjoy!"
}
