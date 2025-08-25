# TYPES OF ARCHITECTURES FOR SYSTEM DEVELOPMENTS
1. DECOUPLED: 
	- Is when frontend e.g. React, Qwik, Svelte is separated from backend e.g. Node.js, Go, Django but they are communicating
via RestAPI, GraphQl. No Server in frontend and all data are transmitted/received by browser, hence less SEO since is Client
Side rendering (CSR). 

	- Slower initial loads since browser must download all JavaScripts.

2. MONOLITHIC:
	- Is old-school way of coding where Server renders html (full SSR) like Express ejs, Django template but good for SEO
but cannot scale well and less interactive and sometimes leads to confusion in rendered html. you serve both UI and API
together.

3.  HYBRID (MODERN): 
	- Backend is just API service which process data, save and cache.
	- frontend has its server for sending/receiving data from/to API and is SSR
	- e.g. Qwik-city + qwik, Nextjs, Sveltekit
	- Best for performance, scaling, multiple support e.g. IoT, web and mobile.
	- backend normally use Bearer jwt tokens for authentications.


## WHY CUSTOM CODING THAN WORDPRESS
1. Wordpress have high security vulnerabilities hence high target to hackers
2. Slow performance
3. Many plugins leads to conflicts
4. Requires PHP skills for highly customization
5. Unnecessary codes for projects due to plugins
6. not for scaling and higher complex projects (SaaS).

But ...
1. Have huge templates 50,000+ 
