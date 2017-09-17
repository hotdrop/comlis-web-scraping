# comlis-web-scraping
This application scrapes the designated Website and sends the obtained company data to `comlis-data-store` :star:  
Also, this app's an assumption to run on the docker container.

:star:  What is comlis-data-store: https://github.com/hotdrop/comlis-data-store  

### About Implements sraping to specific website.
In scraping function, it is absolutely necessary to write specialized code for the target web site.
If I publish such code, think that there is a possibility of causing some trouble such as access log on the Website,  
and exclude code related to scraping processing from management.  

# OverView
This application has two functions.
  1. Interface with comlis-data-store(HTTP with REST API)
  2. Web scraping

# Process Flow
The flow from the current apllication process to the end.  
  1. Execute the key acquisition API from `comlis-data-store`. (GET)
  2. Based on the get key scraping the designated Website to acquire the company data.
  3. Convert the scraping data to json format and send it to `comlis-data-store` with API. (POST)
  4. The idenfitication information of the scraping data is send to `comlis-data-store` with API. (POST)

# Unimplemented function
  - Operate on cloud such as AWS
  - Periodic execution
