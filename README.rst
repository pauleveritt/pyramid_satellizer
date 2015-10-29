==================
pyramid_satellizer
==================

Investigating JWT auth between Pyramid username/passwords and Angular
using satellizer.

Server Usage
============

- Make a virtualenv

- virtualenv/bin/python ./setup.py develop

- virtualenv/bin/pserve development.ini

Browser Usage
=============

- npm install

- npm start

- Go to http://127.0.0.1:8080/src/

- Live reload is available

Background
==========

We want to add JWT REST authentication to KARL. No OAuth or Twitter or
anything, still doing usernames and passwords. But no cookies. And
preferably, to make local development easier, an option to do CORS
between different port numbers.

This test bed helps to eliminate one side from the other. You can take
this frontend and point it to KARL, and refine until it works just as
well as this demo backend.

'Bearer JWT token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZGl0b3IifQ.m13gsNj4B5iyc-L2FTIHj5XI3DHBbWQwOxXttn4aklo"'