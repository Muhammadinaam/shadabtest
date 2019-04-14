# A. How to Setup this Project:

Order of following steps is important: (You should have latest version of composer for setting up Laravel project)

1. Clone project in xampp (htdocs) or wamp (www) folder in shadabtest i.e. c:/xampp/htdocs/shadabtest
2. Create database in mysql with name: rd_db
3. Open "backend/.env" file and edit mysql connection credentials
4. Apache should run on port 80, otherwise change it in angular project (angular project will look for url: localhost/shadabtest/backend/)
5. Open cmd in shadabtest/backend/ and run "php artisan migrate" and then "php artisan passport:install"
6. passport:install command will change secret key so run following mysql query to change secret to key which We have used in angular project:
   
   "UPDATE `rd_db`.`oauth_clients` SET `secret`='H1CZv1kMT147X8IPtXnArBdfgfbCovFwNzvQcmu1' WHERE  `id`=2;"
   
7. 