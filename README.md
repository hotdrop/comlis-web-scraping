# comlis-web-scraping
This application scrapes the designated Website and sends the obtained company data to `comlis-data-store` :star:  
Also, this app's an assumption to run on the docker container.

:star:  What is comlis-data-store: https://github.com/hotdrop/comlis-data-store  

# Environment
- node 8.4.0
- puppeteer 0.10.2
- superagent 3.6.0

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

# Using
Sample application run on `docker for mac`.

## Step1
You implement the WebSite.js of the site you want to obtain using Puppeteer.
And rewrite two env files.
1. credentials.js(Refer to credentials_sample.js)
2. settings.js(Refer to settings_sample.js)

## Step2
Make docker images.  
Puppeteer does not run with only Official docker image. The reason is that library such as `libX11-xcb.so.1` are short.
[Refer to issue](https://github.com/GoogleChrome/puppeteer/issues/290#issuecomment-322921352)
Therefore, Make own docker image using `./docker/Dockerfile` in this repository or get puppeteer work image from docker hub.
```command
// This command is make own docker image
docker build -t puppeteer:latest ./docker
```

## Step3
Run docker container
```command
docker run -v $WORK_DIRECTORY/comlis-web-scraping:/usr/local/src -w /usr/local/src --rm -d puppeteer node index.js
```

# Unimplemented function
  - Operate on cloud such as AWS
  - Periodic execution
