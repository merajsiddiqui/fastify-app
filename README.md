# Sales Statistics App

This is a node application written in `Typescript / Node.js` for saving sales report and getting sales statistics.

## Development Environment
```bash 
node : v14.17.1
```

### Running the application 

```
git clone git+https://github.com/merajsiddiqui/fastify-app.git
cd fastify-app
npm install
npm run build
npm run start
```

### API Endpoints 

> This application supports 2 end points one to create and store sales report and nother to calculate stats based on the report saved in postgreSQL

```
server : http://localhost:3000
```
### 1. Saving Sales Data

```
Method: POST
URL: {server}/sales/create
```
> Request Paayload
```json
{
    "username": "meraj",
    "amount" : 500,
    "date" : "2021-12-16 17:00:50"
}
```
> Note: `date` is supported in 24-hour format


> Success Response 
```json
{
    "message": "sales data successfully saved", 
    "data" :  {
        "id" : 1,
        "username": "meraj",
        "amount" : 500,
        "date" : "2021-12-16 17:00:50"
    }
}
```


### 2. Getting Sales Analaytics 

```
Method: GET
URL: {server}/stats/:statType
```
> statType is enum part of [ `daily`, `weekly`, `monthly` ]

> Success Response 
```json
[
    {
        "sales" : 100, 
        "date" : "2021-12-14"
    }, 
    {
        "sales" : 200, 
        "date" : "2021-12-15"
    },
    {
        "sales" : 300, 
        "date" : "2021-12-16"
    }
]
```
> Note : `date` can change to `day` | `hour` based on what type of stats you are looking



### Bugs & Issue

`Author` : `Meraj Ahmad Siddiqui < merajsiddiqui@outlook.com>`

Feel free to raise bugs or ask any question
