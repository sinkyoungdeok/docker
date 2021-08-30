### Exam 1. Nginx를 이용한 정적 페이지 서버 만들기

**index.html**

```
<html>
  <head>
    <title>도커 이미지 예제</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  </head>
  <body>
    <h1>Nginx 서버를 도커 이미지로 만들었습니다.</h1>
  </body>
</html>
```

**Dockerfile**

```
FROM nginx
COPY index.html /usr/share/nginx/html/index.html
```

**run**

```
$ docker build -t lab02/exam1 .
$ docker run -d --rm \
  -p 50000:80 \
  lab02/exam1
```