```
$ docker run -p 50000:80 \
  -e MYSQL_ALLOW_EMPTY_PASSWORD=true \
  -v /Users/singyeongdeog/Documents/github_code/docker/초보를-위한-도커-안내서/2.nginx:/usr/share/nginx/html \
  nginx:latest
```