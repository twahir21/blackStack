# how to track use inactivity and kill the session?
If using jwt you can kill that hence user is redirected to login
1. if no request from user for 15min delete the jwt (this is implemented
in middleware of checking auth token)

2. can be implemented by storing session datas in token via cookie
(less secure if not correctly implemented)
 or database stores data and ID stored in cookie.

3. Security consideration
	- Account locked after 10hours of failed login attempts
	- Rate limiting and CSRF protection
	- protection of web scraping (e.g. chatgpt was scrapped by deepseek)
and idea and data was stolen. Implement am not robot just like deepseek do.

4. access tokens 5-15mins 
5. refresh token: stored securely 7-30 days

they are just created same way but access do expire and refresh 
