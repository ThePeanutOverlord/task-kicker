API KEY = 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

could i use Scrapy to scrape for user info to use to train the ai?

Asyncio for syncing to database and such

actually maybe just sqlite for now? oh but we might need to access the tables from the frontend

Apache Libcloud?

libgmail

Google Maps

Selenium for traversing forms

pywin32

Py2exe

CREATE TABLE Tasks (
    id INT(30) NOT NULL, 
    name VARCHAR(100), 
    status CHAR(1), 
    date DATE, 
    time VARCHAR(100), 
    `repeat` TINYINT(1), 
    priority CHAR(3), 
    habit TINYINT(1)
    );

\connect -u root -p

LOAD DATA LOCAL INFILE 'C:\Users\overl\OneDrive\Documents\Code Stuffs\Schedule App\task-kicker\taskdata.txt' INTO TABLE Tasks LINES TERMINATED BY '\r\n';     

USE TASKS

mysql --local_infile=1 -u root -p DANK0baif@jool Tasks